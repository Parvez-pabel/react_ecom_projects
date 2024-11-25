import BrandsSkeleton from "../skeliton/BrandsSkeleton.jsx";
import CategorySkeleton from "../skeliton/CategorySkeleton.jsx";
import FeaturesSkeleton from "../skeliton/FeaturesSkeleton.jsx";
import ProductsSkeleton from "../skeliton/ProductsSkeleton.jsx";
import SliderSkeleton from "../skeliton/SliderSkeleton.jsx";
import Layout from "./../components/layout/Layout.jsx";

const HomePage = () => {
  return (
    <>
      <Layout>
        <SliderSkeleton />
        <FeaturesSkeleton />
        <CategorySkeleton />
        <ProductsSkeleton />
        <BrandsSkeleton/>
      </Layout>
    </>
  );
};

export default HomePage;
