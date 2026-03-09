// import { Formik } from 'formik';
// import { DropdownItem } from "reactstrap";
// import Cookies from 'js-cookie';
// import { useState } from 'react';
// import { RiDownload2Line, RiUpload2Line, RiUploadCloud2Line, RiCheckLine, RiCloseLine } from 'react-icons/ri';
// import { TabContent, TabPane, Modal, ModalBody, Progress } from 'reactstrap';
// import { useQueryClient } from '@tanstack/react-query';
// import ShowModal from '../../Elements/Alerts&Modals/Modal';
// import Btn from '../../Elements/Buttons/Btn';
// import useCreate from '../../Utils/Hooks/useCreate';
// import { YupObject, requiredSchema } from '../../Utils/Validation/ValidationSchemas';
// import FileUploadBrowser from '../InputFields/FileUploadBrowser';
// import { useTranslation } from "react-i18next";

// const ImportExport = ({ importExport, refetch, moduleName, exportButton, Dropdown, url }) => {
//     const { t } = useTranslation("common");
//     const [modal, setModal] = useState(false);
//     const [exportModal, setExportModal] = useState(false);
//     const [exportProgress, setExportProgress] = useState(0);
//     const [exportStatus, setExportStatus] = useState('idle');

//     const queryClient = useQueryClient();

//     // ✅ Export mutate — just fires the job, returns cache_key instantly
//     const { mutate: exportMutate } = useCreate(
//         importExport.exportUrl,
//         false, false, false,
//         null,
//         true, '', 'post'
//     );

//     const { mutate, isLoading } = useCreate(importExport?.importUrl, false, false, `${moduleName} imported successfully`, (resDta) => {
//         if (resDta?.status == 200 || resDta?.status == 201) {
//             queryClient.invalidateQueries();
//             refetch && refetch();
//             setModal(false);
//         }
//     });

//     // ✅ Handle export — dispatches job, polls for completion every 3s
//     const handleExport = () => {
//         setExportModal(true);
//         setExportStatus('loading');
//         setExportProgress(10);

//         const payload = importExport?.paramsProps
//             ? Object.fromEntries(
//                 Object.entries(importExport.paramsProps).filter(([_, v]) => v != null && v !== "")
//             )
//             : {};

//         exportMutate(payload, {
//             onSuccess: (res) => {
//                 const cacheKey = res?.data?.cache_key;

//                 if (!cacheKey) {
//                     setExportStatus('error');
//                     return;
//                 }

//                 // ✅ Poll status endpoint every 3 seconds until done
//                 const poll = setInterval(async () => {
//                     try {
//                         const statusRes = await fetch(
//                             `${process.env.API_PROD_URL}/product/csv/export/status?cache_key=${cacheKey}`,
//                             {
//                                 headers: {
//                                     Authorization: `Bearer ${Cookies.get('uat_multikart')}`,
//                                     Accept: 'application/json',
//                                 }
//                             }
//                         );

//                         const data = await statusRes.json();

//                         // Slowly increment progress bar while waiting
//                         setExportProgress(prev => Math.min(prev + 5, 90));

//                         if (data.status === 'done') {
//                             clearInterval(poll);
//                             setExportProgress(100);
//                             setExportStatus('success');

//                             // ✅ Fetch as blob — bypasses cross-origin download restriction
//                             const fileRes = await fetch(data.url);
//                             const blob = await fileRes.blob();
//                             const blobUrl = window.URL.createObjectURL(blob);
//                             const link = document.createElement('a');
//                             link.href = blobUrl;
//                             link.setAttribute('download', `${moduleName.toLowerCase()}.csv`);
//                             document.body.appendChild(link);
//                             link.click();
//                             document.body.removeChild(link);
//                             window.URL.revokeObjectURL(blobUrl);

//                             setTimeout(() => {
//                                 setExportModal(false);
//                                 setExportStatus('idle');
//                                 setExportProgress(0);
//                             }, 2000);

//                         } else if (data.status === 'failed') {
//                             clearInterval(poll);
//                             setExportStatus('error');
//                         }

//                     } catch {
//                         clearInterval(poll);
//                         setExportStatus('error');
//                     }
//                 }, 3000);
//             },
//             onError: () => {
//                 setExportStatus('error');
//             }
//         });
//     };

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
//             </ShowModal>
//         </>
//     )
// }

// export default ImportExport
import { Formik } from 'formik';
import { DropdownItem } from "reactstrap";
import Cookies from 'js-cookie';
import { useState } from 'react';
import { RiDownload2Line, RiUpload2Line, RiUploadCloud2Line, RiCheckLine, RiCloseLine, RiLoader4Line } from 'react-icons/ri';
import { TabContent, TabPane, Modal, ModalBody, Progress } from 'reactstrap';
import { useQueryClient } from '@tanstack/react-query';
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

    // Import state
    const [importModal, setImportModal] = useState(false);
    const [importProgress, setImportProgress] = useState(0);
    const [importStatus, setImportStatus] = useState('idle'); // idle | uploading | processing | completed | failed
    const [importCount, setImportCount] = useState(0);
    const [importError, setImportError] = useState('');

    const queryClient = useQueryClient();

    // ✅ Export mutate
    const { mutate: exportMutate } = useCreate(
        importExport.exportUrl,
        false, false, false,
        null,
        true, '', 'post'
    );

    // ✅ Import mutate — just uploads file, gets cache_key back instantly
    const { mutate, isLoading: isUploading } = useCreate(
        importExport?.importUrl,
        false, false, false,
        null,
        true, '', 'post'
    );

    // ─── IMPORT HANDLER ────────────────────────────────────────────────────────
    const handleImportSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        Object.values(values[moduleName.toLowerCase()]).forEach((el) => {
            formData.append(`${moduleName?.toLowerCase()}`, el);
        });

        // Show progress modal immediately
        setModal(false);
        setImportModal(true);
        setImportStatus('uploading');
        setImportProgress(15);
        setImportError('');

        mutate(formData, {
            onSuccess: (res) => {
                const cacheKey = res?.data?.cache_key;

                // ── Sync import (no queue) — old behavior fallback ──
                if (!cacheKey) {
                    if (res?.status === 200 || res?.status === 201) {
                        setImportProgress(100);
                        setImportStatus('completed');
                        setImportCount(res?.data?.length || 0);
                        queryClient.invalidateQueries();
                        refetch && refetch();
                    } else {
                        setImportStatus('failed');
                        setImportError('Import failed. Please try again.');
                    }
                    return;
                }

                // ── Queued import — poll for status ──
                setImportStatus('processing');
                setImportProgress(30);

                const poll = setInterval(async () => {
                    try {
                        const statusRes = await fetch(
                            `${process.env.API_PROD_URL}/product/csv/import/status?cache_key=${cacheKey}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${Cookies.get('uat_multikart')}`,
                                    Accept: 'application/json',
                                }
                            }
                        );

                        const data = await statusRes.json();

                        // Slowly tick up progress bar
                        setImportProgress(prev => Math.min(prev + 4, 90));

                        if (data.status === 'completed') {
                            clearInterval(poll);
                            setImportProgress(100);
                            setImportStatus('completed');
                            setImportCount(data.count || 0);
                            queryClient.invalidateQueries();
                            refetch && refetch();
                            resetForm();

                        } else if (data.status === 'failed') {
                            clearInterval(poll);
                            setImportStatus('failed');
                            setImportError(data.message || 'Import failed. Please try again.');
                        }
                        // status === 'processing' or 'queued' → keep polling

                    } catch (err) {
                        clearInterval(poll);
                        setImportStatus('failed');
                        setImportError('Could not reach server. Please check your connection.');
                    }
                }, 3000);
            },

            onError: (err) => {
                setImportStatus('failed');
                setImportError(err?.response?.data?.message || 'Upload failed. Please try again.');
            }
        });
    };

    const closeImportModal = () => {
        if (importStatus === 'uploading' || importStatus === 'processing') return; // don't close while running
        setImportModal(false);
        setImportStatus('idle');
        setImportProgress(0);
        setImportError('');
    };

    // ─── EXPORT HANDLER ────────────────────────────────────────────────────────
    const handleExport = () => {
        setExportModal(true);
        setExportStatus('loading');
        setExportProgress(10);

        const payload = importExport?.paramsProps
            ? Object.fromEntries(
                Object.entries(importExport.paramsProps).filter(([_, v]) => v != null && v !== "")
            )
            : {};

        exportMutate(payload, {
            onSuccess: (res) => {
                const cacheKey = res?.data?.cache_key;

                if (!cacheKey) {
                    setExportStatus('error');
                    return;
                }

                const poll = setInterval(async () => {
                    try {
                        const statusRes = await fetch(
                            `${process.env.API_PROD_URL}/product/csv/export/status?cache_key=${cacheKey}`,
                            {
                                headers: {
                                    Authorization: `Bearer ${Cookies.get('uat_multikart')}`,
                                    Accept: 'application/json',
                                }
                            }
                        );

                        const data = await statusRes.json();
                        setExportProgress(prev => Math.min(prev + 5, 90));

                        if (data.status === 'done') {
                            clearInterval(poll);
                            setExportProgress(100);
                            setExportStatus('success');

                            const fileRes = await fetch(data.url);
                            const blob = await fileRes.blob();
                            const blobUrl = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = blobUrl;
                            link.setAttribute('download', `${moduleName.toLowerCase()}.csv`);
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(blobUrl);

                            setTimeout(() => {
                                setExportModal(false);
                                setExportStatus('idle');
                                setExportProgress(0);
                            }, 2000);

                        } else if (data.status === 'failed') {
                            clearInterval(poll);
                            setExportStatus('error');
                        }

                    } catch {
                        clearInterval(poll);
                        setExportStatus('error');
                    }
                }, 3000);
            },
            onError: () => {
                setExportStatus('error');
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
            {Dropdown ? (
                <>
                    <li>
                        <button onClick={() => setModal(true)} className="dropdown-item">{t("import")}</button>
                    </li>
                    <li>
                        <DropdownItem onClick={handleExport}>{t("export")}</DropdownItem>
                    </li>
                </>
            ) : (
                <>
                    <a className="align-items-center btn btn-light-bg" onClick={() => setModal(true)}>
                        <RiUpload2Line />{t("import")}
                    </a>
                    {exportButton === true && (
                        <a className="align-items-center btn btn-light-bg" onClick={handleExport}>
                            <RiDownload2Line />{t("export")}
                        </a>
                    )}
                </>
            )}

            {/* ── Import Progress Modal ───────────────────────────────────────── */}
            <Modal isOpen={importModal} centered className="export-progress-modal">
                <ModalBody className="text-center p-4">

                    {(importStatus === 'uploading' || importStatus === 'processing') && (
                        <>
                            <div className="export-icon mb-3">
                                <RiLoader4Line size={48} className="text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                            </div>
                            <h5 className="mb-3">
                                {importStatus === 'uploading' ? t("Uploading file...") : t("Processing products...")}
                            </h5>
                            <Progress value={importProgress} className="mb-3" animated />
                            <p className="text-muted mb-0">
                                {importStatus === 'uploading'
                                    ? t("Please wait while we upload your file")
                                    : t("Import is running in background. This may take a few minutes.")}
                            </p>
                        </>
                    )}

                    {importStatus === 'completed' && (
                        <>
                            <div className="export-icon mb-3">
                                <RiCheckLine size={48} className="text-success" />
                            </div>
                            <h5 className="mb-3 text-success">{t("Import Successful!")}</h5>
                            {importCount > 0 && (
                                <p className="text-muted mb-2">{importCount} {t("products imported")}</p>
                            )}
                            <Btn className="btn-theme mt-2" title="Close" onClick={closeImportModal} />
                        </>
                    )}

                    {importStatus === 'failed' && (
                        <>
                            <div className="export-icon mb-3">
                                <RiCloseLine size={48} className="text-danger" />
                            </div>
                            <h5 className="mb-3 text-danger">{t("Import Failed")}</h5>
                            <p className="text-muted mb-3">{importError || t("Something went wrong. Please try again.")}</p>
                            <Btn className="btn-theme" title="Close" onClick={closeImportModal} />
                        </>
                    )}

                </ModalBody>
            </Modal>

            {/* ── Export Progress Modal ───────────────────────────────────────── */}
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

            {/* ── Upload / File Select Modal ──────────────────────────────────── */}
            <ShowModal
                open={modal}
                setModal={setModal}
                modalAttr={{ className: "import-export-modal media-modal inset-media-modal modal-dialog modal-dialog-centered modal-xl" }}
                close={true}
                title={"insert_media"}
                noClass={true}
            >
                <TabContent>
                    <Formik
                        initialValues={{ [moduleName?.toLowerCase()]: "" }}
                        validationSchema={YupObject({ [moduleName?.toLowerCase()]: requiredSchema })}
                        onSubmit={handleImportSubmit}
                    >
                        {({ values, setFieldValue, errors, handleSubmit }) => (
                            <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit}>
                                <TabPane className={"fade active show"} id="select">
                                    <div className="content-section drop-files-sec mb-2">
                                        <div>
                                            <RiUploadCloud2Line />
                                            <div>
                                                <div className="dflex-wgap justify-content-center ms-auto save-back-button">
                                                    <h2>
                                                        {t("drop_files_here")}
                                                        <span>{t("or")}</span>
                                                        <FileUploadBrowser
                                                            errors={errors}
                                                            id={moduleName.toLowerCase()}
                                                            name={moduleName.toLowerCase()}
                                                            type="file"
                                                            multiple={true}
                                                            values={values}
                                                            setFieldValue={setFieldValue}
                                                            accept=".csv"
                                                        />
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        {t("please_download_csv")}
                                        <a className='ms-2' href={`/assets/csv/${importExport?.sampleFile}`} download={importExport?.sampleFile}>
                                            {t(importExport?.sampleFile?.includes("csv") ? "here" : "read_the_instructions")}
                                        </a>
                                        {importExport?.instructionsAndSampleFile && (
                                            <>
                                                {t("and_please_ensure_you")}
                                                <a href={`/assets/csv/${importExport?.instructions}`} download={importExport?.instructions}>
                                                    {t("read_the_instructions")}
                                                </a>
                                            </>
                                        )}
                                    </p>
                                </TabPane>
                                <div className="modal-footer">
                                    {values[moduleName.toLowerCase()] && values[moduleName.toLowerCase()]?.length > 0 && (
                                        <a href="#javascript" onClick={() => setFieldValue(`${moduleName}`, "")}>
                                            {t("clear")}
                                        </a>
                                    )}
                                    <Btn
                                        type="submit"
                                        className="btn-theme ms-auto"
                                        title="insert_media"
                                        loading={Number(isUploading)}
                                    />
                                </div>
                            </form>
                        )}
                    </Formik>
                </TabContent>
            </ShowModal>
        </>
    );
};

export default ImportExport;