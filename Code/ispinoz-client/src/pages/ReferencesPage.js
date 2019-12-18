import React, {Component} from 'react';
import '../App.css'
// Components
import AppbarHome from "../components/appbarHome";
import PaperReferencesPage from "../components/paperReferencesPage";


class ReferencesPage extends Component {
  componentDidMount() {
    document.body.style.background = "#fff";
    document.body.style.marginLeft = "370px";
    document.body.style.marginRight = "100px";


  }

  render() {
    return (
      <div className="home">
        <AppbarHome/>
        <PaperReferencesPage/>

      </div>
    );
  }
}

export default ReferencesPage;