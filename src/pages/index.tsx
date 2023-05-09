import { HomePage } from "$/lib/ui";
import { GetServerSideProps } from "next";

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
