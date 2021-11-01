import Item from "./Item";

const MainContent = () => {
  return (
    <div className="MainContent">
      <Item
        title="J'ai faim"
        subtitle="un developpeur affamé au Réacteur !"
        picture="https://www.mycuisine.com/wp-content/uploads/2018/12/burger-rossini.jpg"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At error ipsam similique laborum pariatur blanditiis hic fuga, quod facilis delectus dolorem deserunt iste deleniti minus ducimus eaque illum explicabo quaerat.
"
      />
      <Item
        title="Inondation au Reacteur"
        subtitle="de la flotte sur Paris, encore et toujours"
        picture="https://www.leparisien.fr/resizer/l6z2vq5QMUvh95Ok0BQlM_3tOzY=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/6JWLIR5ISMTAWAWWDIBR2B6LKY.jpg"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At error ipsam similique laborum pariatur blanditiis hic fuga, quod facilis delectus dolorem deserunt iste deleniti minus ducimus eaque illum explicabo quaerat.
"
      />
    </div>
  );
};
export default MainContent;
