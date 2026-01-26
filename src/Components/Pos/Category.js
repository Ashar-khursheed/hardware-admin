import Avatar from "../CommonComponent/Avatar";

const Category = ({ categoryData, setGetCategoryId, getCategoryId }) => {
  return (
    <>
      {categoryData && <div>
        <div className="dashboard-category">
          <a className={`category-image ${getCategoryId == categoryData.id ? 'active' : ""}`} onClick={() => setGetCategoryId((prev) => prev !== categoryData.id ? categoryData.id : "")}>
            <Avatar data={categoryData?.category_image?.original_url ? categoryData.category_image.original_url.replace(/([^:]\/)\/+/g, "$1") : null} name={categoryData} />
          </a>
          <a className="category-name">
            <h6>{categoryData?.name}</h6>
          </a>
        </div>
      </div>}
    </>
  );
};

export default Category;
