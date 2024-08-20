import { Helmet } from "react-helmet";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="">
      <Helmet>
        <title>MyBinge</title>
        <meta
          name="description"
          content="Navigate through all your favorite movies and Binge!!!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content="Movie application" />
        <meta
          name="twitter:description"
          content="Navigate through all your favorite movies and Binge!!!"
        />
        <meta name="twitter:image" content="url_to_image" />
        <meta property="og:title" content="MyBinge" />
        <meta
          property="og:description"
          content="Navigate through all your favorite movies and Binge!!!"
        />
      </Helmet>
      <Homepage />
    </div>
  );
}

export default App;
