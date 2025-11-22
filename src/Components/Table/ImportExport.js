// import { Formik } from 'formik';
// import { DropdownItem } from "reactstrap";
// import Link from "next/link";
// import { useEffect, useState } from 'react';
// import { RiDownload2Line, RiUpload2Line, RiUploadCloud2Line } from 'react-icons/ri';
// import { TabContent, TabPane } from 'reactstrap';
// import ShowModal from '../../Elements/Alerts&Modals/Modal';
// import Btn from '../../Elements/Buttons/Btn';
// import useCreate from '../../Utils/Hooks/useCreate';
// import { YupObject, requiredSchema } from '../../Utils/Validation/ValidationSchemas';
// import FileUploadBrowser from '../InputFields/FileUploadBrowser';
// import { useTranslation } from "react-i18next";

// const ImportExport = ({ importExport, refetch, moduleName, exportButton, Dropdown }) => {
//     const { t } = useTranslation("common");
//     const [modal, setModal] = useState(false)

//     const { mutate: exportMutate, isLoading: exportLoader } = useCreate(importExport.exportUrl, false, false, false, (resDta) => {
//         if (resDta?.status == 200 || resDta?.status == 201) {
//             const blob = new Blob([resDta?.data], { type: 'text/csv' });
//             const url = window.URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = `${moduleName.toLowerCase()}.csv`;
//             link.click();
//             window.URL.revokeObjectURL(url);
//         }
//     }, false, 'blob')
//     const { mutate, isLoading } = useCreate(importExport?.importUrl, false, false, `${moduleName} added successfully`, (resDta) => {
//         if (resDta?.status == 200 || resDta?.status == 201) {
//             refetch();
//             setModal(false);
//         }
//     })

//     return (
//         <>
//             {
//                 Dropdown ?
//                     <>
//                         <li>
//                             <button onClick={() => setModal(true)} className="dropdown-item">{t("import")}</button>
//                         </li>
//                         <li>
//                             <DropdownItem onClick={() => exportMutate()}>{t("export")}</DropdownItem>
//                         </li>
//                     </>
//                     :
//                     <>
//                         <a className="align-items-center btn btn-light-bg" onClick={() => setModal(true)}><RiUpload2Line />{t("import")}</a>
//                         {exportButton == true && <a className="align-items-center btn btn-light-bg" onClick={() => exportMutate({ ...importExport?.paramsProps })}><RiDownload2Line />{t("export")}</a >}
//                     </>
//             }

//             <ShowModal open={modal} setModal={setModal} modalAttr={{ className: "import-export-modal media-modal inset-media-modal modal-dialog modal-dialog-centered modal-xl" }} close={true} title={"insert_media"} noClass={true}>
//                 <TabContent>
//                     <Formik
//                         initialValues={{ [moduleName?.toLowerCase()]: "" }}
//                         validationSchema={YupObject({ [moduleName?.toLowerCase()]: requiredSchema })}
//                         onSubmit={(values, { resetForm }) => {
//                             let formData = new FormData();
//                             Object.values(values[moduleName.toLowerCase()]).forEach((el, i) => {
//                                 formData.append(`${moduleName?.toLowerCase()}`, el);
//                             });
//                             mutate(formData);
//                         }}
//                     >
//                         {({ values, setFieldValue, errors, handleSubmit }) => (
//                             <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
//                                 <TabPane className={"fade active show"} id="select">
//                                     <div className="content-section drop-files-sec mb-2">
//                                         <div>
//                                             <RiUploadCloud2Line />
//                                             <div>
//                                                 <div className="dflex-wgap justify-content-center ms-auto save-back-button">
//                                                     <h2>{t("drop_files_here")}
//                                                         <span>{t("or")}</span>
//                                                         <FileUploadBrowser errors={errors} id={moduleName.toLowerCase()} name={moduleName.toLowerCase()} type="file" multiple={true} values={values} setFieldValue={setFieldValue} accept=".csv" />
//                                                     </h2>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <p>{t("please_download_csv")}
//                                         <a className='ms-2' href={`/assets/csv/${importExport?.sampleFile}`} download={importExport?.sampleFile}
//                                         >{t(importExport?.sampleFile?.includes("csv") ? "here" : "read_the_instructions")}</a>
//                                         {importExport?.instructionsAndSampleFile &&
//                                             <>
//                                                 {t("and_please_ensure_you")}
//                                                 <a href={`/assets/csv/${importExport?.instructions}`} download={importExport?.instructions} > {t("read_the_instructions")} </a>
//                                             </>
//                                         }
//                                     </p>
//                                 </TabPane>
//                                 <div className="modal-footer">
//                                     {values[moduleName.toLowerCase()] && values[moduleName.toLowerCase()]?.length > 0 &&
//                                         <a href="#javascript" onClick={() => setFieldValue(`${moduleName}`, "")}>{t("clear")}</a>
//                                     }
//                                     <Btn type="submit" className="btn-theme ms-auto" title="insert_media" loading={Number(isLoading)} />
//                                 </div>
//                             </form>
//                         )}
//                     </Formik>
//                 </TabContent>
//             </ShowModal >
//         </>
//     )
// }

// export default ImportExport


// import { Formik } from 'formik';
// import { DropdownItem } from "reactstrap";
// import Link from "next/link";
// import { useEffect, useState } from 'react';
// import { RiDownload2Line, RiUpload2Line, RiUploadCloud2Line, RiCheckLine, RiCloseLine } from 'react-icons/ri';
// import { TabContent, TabPane, Modal, ModalBody, Progress } from 'reactstrap';
// import ShowModal from '../../Elements/Alerts&Modals/Modal';
// import Btn from '../../Elements/Buttons/Btn';
// import useCreate from '../../Utils/Hooks/useCreate';
// import { YupObject, requiredSchema } from '../../Utils/Validation/ValidationSchemas';
// import FileUploadBrowser from '../InputFields/FileUploadBrowser';
// import { useTranslation } from "react-i18next";

// const ImportExport = ({ importExport, refetch, moduleName, exportButton, Dropdown }) => {
//     const { t } = useTranslation("common");
//     const [modal, setModal] = useState(false);
//     const [exportModal, setExportModal] = useState(false);
//     const [exportProgress, setExportProgress] = useState(0);
//     const [exportStatus, setExportStatus] = useState('idle'); // idle, loading, success, error

//     const { mutate: exportMutate, isLoading: exportLoader } = useCreate(importExport.exportUrl, false, false, false, (resDta) => {
//         if (resDta?.status == 200 || resDta?.status == 201) {
//             setExportProgress(100);
//             setExportStatus('success');
            
//             const blob = new Blob([resDta?.data], { type: 'text/csv' });
//             const url = window.URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.download = `${moduleName.toLowerCase()}.csv`;
//             link.click();
//             window.URL.revokeObjectURL(url);
            
//             // Auto close after 2 seconds on success
//             setTimeout(() => {
//                 setExportModal(false);
//                 setExportStatus('idle');
//                 setExportProgress(0);
//             }, 2000);
//         } else {
//             setExportStatus('error');
//         }
//     }, false, 'blob');

//     // Handle export with progress
//     const handleExport = () => {
//         setExportModal(true);
//         setExportStatus('loading');
//         setExportProgress(0);
        
//         // Simulate progress while waiting for API
//         const progressInterval = setInterval(() => {
//             setExportProgress(prev => {
//                 if (prev >= 90) {
//                     clearInterval(progressInterval);
//                     return 90;
//                 }
//                 return prev + 10;
//             });
//         }, 200);
        
//         exportMutate({ ...importExport?.paramsProps }, {
//             onError: () => {
//                 clearInterval(progressInterval);
//                 setExportStatus('error');
//                 setExportProgress(0);
//             }
//         });
//     };

//     // Close export modal
//     const closeExportModal = () => {
//         setExportModal(false);
//         setExportStatus('idle');
//         setExportProgress(0);
//     };

//     return (
//         <>
//             {
//                 Dropdown ?
//                     <>
//                         <li>
//                             <button onClick={() => setModal(true)} className="dropdown-item">{t("import")}</button>
//                         </li>
//                         <li>
//                             <DropdownItem onClick={handleExport}>{t("export")}</DropdownItem>
//                         </li>
//                     </>
//                     :
//                     <>
//                         <a className="align-items-center btn btn-light-bg" onClick={() => setModal(true)}><RiUpload2Line />{t("import")}</a>
//                         {exportButton == true && (
//                             <a className="align-items-center btn btn-light-bg" onClick={handleExport}>
//                                 <RiDownload2Line />{t("export")}
//                             </a>
//                         )}
//                     </>
//             }

//             {/* Export Progress Modal */}
//             <Modal isOpen={exportModal} centered className="export-progress-modal">
//                 <ModalBody className="text-center p-4">
//                     {exportStatus === 'loading' && (
//                         <>
//                             <div className="export-icon mb-3">
//                                 <RiDownload2Line size={48} className="text-primary animate-bounce" />
//                             </div>
//                             <h5 className="mb-3">{t("Exporting")} {moduleName}...</h5>
//                             <Progress value={exportProgress} className="mb-3" animated />
//                             <p className="text-muted mb-0">{t("Please wait while we prepare your file")}</p>
//                         </>
//                     )}
                    
//                     {exportStatus === 'success' && (
//                         <>
//                             <div className="export-icon mb-3">
//                                 <RiCheckLine size={48} className="text-success" />
//                             </div>
//                             <h5 className="mb-3 text-success">{t("Export Successful!")}</h5>
//                             <p className="text-muted mb-0">{t("Your file has been downloaded")}</p>
//                         </>
//                     )}
                    
//                     {exportStatus === 'error' && (
//                         <>
//                             <div className="export-icon mb-3">
//                                 <RiCloseLine size={48} className="text-danger" />
//                             </div>
//                             <h5 className="mb-3 text-danger">{t("Export Failed")}</h5>
//                             <p className="text-muted mb-3">{t("Something went wrong. Please try again.")}</p>
//                             <Btn className="btn-theme" title="Close" onClick={closeExportModal} />
//                         </>
//                     )}
//                 </ModalBody>
//             </Modal>

//             {/* Import Modal */}
//             <ShowModal open={modal} setModal={setModal} modalAttr={{ className: "import-export-modal media-modal inset-media-modal modal-dialog modal-dialog-centered modal-xl" }} close={true} title={"insert_media"} noClass={true}>
//                 <TabContent>
//                     <Formik
//                         initialValues={{ [moduleName?.toLowerCase()]: "" }}
//                         validationSchema={YupObject({ [moduleName?.toLowerCase()]: requiredSchema })}
//                         onSubmit={(values, { resetForm }) => {
//                             let formData = new FormData();
//                             Object.values(values[moduleName.toLowerCase()]).forEach((el, i) => {
//                                 formData.append(`${moduleName?.toLowerCase()}`, el);
//                             });
//                             mutate(formData);
//                         }}
//                     >
//                         {({ values, setFieldValue, errors, handleSubmit }) => (
//                             <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
//                                 <TabPane className={"fade active show"} id="select">
//                                     <div className="content-section drop-files-sec mb-2">
//                                         <div>
//                                             <RiUploadCloud2Line />
//                                             <div>
//                                                 <div className="dflex-wgap justify-content-center ms-auto save-back-button">
//                                                     <h2>{t("drop_files_here")}
//                                                         <span>{t("or")}</span>
//                                                         <FileUploadBrowser errors={errors} id={moduleName.toLowerCase()} name={moduleName.toLowerCase()} type="file" multiple={true} values={values} setFieldValue={setFieldValue} accept=".csv" />
//                                                     </h2>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <p>{t("please_download_csv")}
//                                         <a className='ms-2' href={`/assets/csv/${importExport?.sampleFile}`} download={importExport?.sampleFile}
//                                         >{t(importExport?.sampleFile?.includes("csv") ? "here" : "read_the_instructions")}</a>
//                                         {importExport?.instructionsAndSampleFile &&
//                                             <>
//                                                 {t("and_please_ensure_you")}
//                                                 <a href={`/assets/csv/${importExport?.instructions}`} download={importExport?.instructions} > {t("read_the_instructions")} </a>
//                                             </>
//                                         }
//                                     </p>
//                                 </TabPane>
//                                 <div className="modal-footer">
//                                     {values[moduleName.toLowerCase()] && values[moduleName.toLowerCase()]?.length > 0 &&
//                                         <a href="#javascript" onClick={() => setFieldValue(`${moduleName}`, "")}>{t("clear")}</a>
//                                     }
//                                     <Btn type="submit" className="btn-theme ms-auto" title="insert_media" loading={Number(isLoading)} />
//                                 </div>
//                             </form>
//                         )}
//                     </Formik>
//                 </TabContent>
//             </ShowModal >
//         </>
//     )
// }

// export default ImportExport


import { Formik } from 'formik';
import { DropdownItem } from "reactstrap";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { RiDownload2Line, RiUpload2Line, RiUploadCloud2Line, RiCheckLine, RiCloseLine } from 'react-icons/ri';
import { TabContent, TabPane, Modal, ModalBody, Progress } from 'reactstrap';
import { useQueryClient } from '@tanstack/react-query';  // ADD THIS
import ShowModal from '../../Elements/Alerts&Modals/Modal';
import Btn from '../../Elements/Buttons/Btn';
import useCreate from '../../Utils/Hooks/useCreate';
import { YupObject, requiredSchema } from '../../Utils/Validation/ValidationSchemas';
import FileUploadBrowser from '../InputFields/FileUploadBrowser';
import { useTranslation } from "react-i18next";

const ImportExport = ({ importExport, refetch, moduleName, exportButton, Dropdown, url }) => {
    const { t } = useTranslation("common");
    const [modal, setModal] = useState(false);
    const [exportModal, setExportModal] = useState(false);
    const [exportProgress, setExportProgress] = useState(0);
    const [exportStatus, setExportStatus] = useState('idle');
    
    // Get queryClient to invalidate cache
    const queryClient = useQueryClient();

    const { mutate: exportMutate, isLoading: exportLoader } = useCreate(importExport.exportUrl, false, false, false, (resDta) => {
        if (resDta?.status == 200 || resDta?.status == 201) {
            setExportProgress(100);
            setExportStatus('success');
            
            const blob = new Blob([resDta?.data], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${moduleName.toLowerCase()}.csv`;
            link.click();
            window.URL.revokeObjectURL(url);
            
            setTimeout(() => {
                setExportModal(false);
                setExportStatus('idle');
                setExportProgress(0);
            }, 2000);
        } else {
            setExportStatus('error');
        }
    }, false, 'blob');

    const { mutate, isLoading } = useCreate(importExport?.importUrl, false, false, `${moduleName} imported successfully`, (resDta) => {
        if (resDta?.status == 200 || resDta?.status == 201) {
            // CLEAR ALL CACHES related to this module
            queryClient.invalidateQueries();  // Invalidates ALL queries
            
            // Or invalidate specific queries:
            // queryClient.invalidateQueries([url]);
            // queryClient.invalidateQueries(['product']);
            
            // Also call refetch for immediate update
            refetch && refetch();
            
            setModal(false);
        }
    });

    // Handle export with progress
    const handleExport = () => {
        setExportModal(true);
        setExportStatus('loading');
        setExportProgress(0);
        
        const progressInterval = setInterval(() => {
            setExportProgress(prev => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90;
                }
                return prev + 10;
            });
        }, 200);
        
        exportMutate({ ...importExport?.paramsProps }, {
            onError: () => {
                clearInterval(progressInterval);
                setExportStatus('error');
                setExportProgress(0);
            }
        });
    };

    const closeExportModal = () => {
        setExportModal(false);
        setExportStatus('idle');
        setExportProgress(0);
    };

    return (
        <>
            {/* ... rest of your JSX remains the same ... */}
            {
                Dropdown ?
                    <>
                        <li>
                            <button onClick={() => setModal(true)} className="dropdown-item">{t("import")}</button>
                        </li>
                        <li>
                            <DropdownItem onClick={handleExport}>{t("export")}</DropdownItem>
                        </li>
                    </>
                    :
                    <>
                        <a className="align-items-center btn btn-light-bg" onClick={() => setModal(true)}><RiUpload2Line />{t("import")}</a>
                        {exportButton == true && (
                            <a className="align-items-center btn btn-light-bg" onClick={handleExport}>
                                <RiDownload2Line />{t("export")}
                            </a>
                        )}
                    </>
            }

            {/* Export Progress Modal */}
            <Modal isOpen={exportModal} centered className="export-progress-modal">
                <ModalBody className="text-center p-4">
                    {exportStatus === 'loading' && (
                        <>
                            <div className="export-icon mb-3">
                                <RiDownload2Line size={48} className="text-primary animate-bounce" />
                            </div>
                            <h5 className="mb-3">{t("Exporting")} {moduleName}...</h5>
                            <Progress value={exportProgress} className="mb-3" animated />
                            <p className="text-muted mb-0">{t("Please wait while we prepare your file")}</p>
                        </>
                    )}
                    
                    {exportStatus === 'success' && (
                        <>
                            <div className="export-icon mb-3">
                                <RiCheckLine size={48} className="text-success" />
                            </div>
                            <h5 className="mb-3 text-success">{t("Export Successful!")}</h5>
                            <p className="text-muted mb-0">{t("Your file has been downloaded")}</p>
                        </>
                    )}
                    
                    {exportStatus === 'error' && (
                        <>
                            <div className="export-icon mb-3">
                                <RiCloseLine size={48} className="text-danger" />
                            </div>
                            <h5 className="mb-3 text-danger">{t("Export Failed")}</h5>
                            <p className="text-muted mb-3">{t("Something went wrong. Please try again.")}</p>
                            <Btn className="btn-theme" title="Close" onClick={closeExportModal} />
                        </>
                    )}
                </ModalBody>
            </Modal>

            {/* Import Modal */}
            <ShowModal open={modal} setModal={setModal} modalAttr={{ className: "import-export-modal media-modal inset-media-modal modal-dialog modal-dialog-centered modal-xl" }} close={true} title={"insert_media"} noClass={true}>
                <TabContent>
                    <Formik
                        initialValues={{ [moduleName?.toLowerCase()]: "" }}
                        validationSchema={YupObject({ [moduleName?.toLowerCase()]: requiredSchema })}
                        onSubmit={(values, { resetForm }) => {
                            let formData = new FormData();
                            Object.values(values[moduleName.toLowerCase()]).forEach((el, i) => {
                                formData.append(`${moduleName?.toLowerCase()}`, el);
                            });
                            mutate(formData);
                        }}
                    >
                        {({ values, setFieldValue, errors, handleSubmit }) => (
                            <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
                                <TabPane className={"fade active show"} id="select">
                                    <div className="content-section drop-files-sec mb-2">
                                        <div>
                                            <RiUploadCloud2Line />
                                            <div>
                                                <div className="dflex-wgap justify-content-center ms-auto save-back-button">
                                                    <h2>{t("drop_files_here")}
                                                        <span>{t("or")}</span>
                                                        <FileUploadBrowser errors={errors} id={moduleName.toLowerCase()} name={moduleName.toLowerCase()} type="file" multiple={true} values={values} setFieldValue={setFieldValue} accept=".csv" />
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{t("please_download_csv")}
                                        <a className='ms-2' href={`/assets/csv/${importExport?.sampleFile}`} download={importExport?.sampleFile}
                                        >{t(importExport?.sampleFile?.includes("csv") ? "here" : "read_the_instructions")}</a>
                                        {importExport?.instructionsAndSampleFile &&
                                            <>
                                                {t("and_please_ensure_you")}
                                                <a href={`/assets/csv/${importExport?.instructions}`} download={importExport?.instructions} > {t("read_the_instructions")} </a>
                                            </>
                                        }
                                    </p>
                                </TabPane>
                                <div className="modal-footer">
                                    {values[moduleName.toLowerCase()] && values[moduleName.toLowerCase()]?.length > 0 &&
                                        <a href="#javascript" onClick={() => setFieldValue(`${moduleName}`, "")}>{t("clear")}</a>
                                    }
                                    <Btn type="submit" className="btn-theme ms-auto" title="insert_media" loading={Number(isLoading)} />
                                </div>
                            </form>
                        )}
                    </Formik>
                </TabContent>
            </ShowModal>
        </>
    )
}

export default ImportExport