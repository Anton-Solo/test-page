import ErrorBoundary from "./ErrorBoundries";
import { Advantages } from "./components/Advantages/Advantages";
import { Comment } from "./components/Comment/Comment";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Reviews } from "./components/Reviews/Reviews";
import { Trading } from "./components/Trading/Trading";
import { Video } from "./components/Video/Video";
import ThemeProvider from "./context/Context";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Header />
        <Advantages />
        <Comment />
        <Video />
        <Trading />
        <Reviews />
        <Contact />
        <Footer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
