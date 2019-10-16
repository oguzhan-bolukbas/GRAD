import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";

// Components
import Navbar from "../Components/Navbar";

class home extends Component {
  componentDidMount() {
    document.body.style.background = "#fff"
  }

  render() {
    return (
        <Navbar> {/* Switch'in üzerinde yazdığımız için Navbar hep yukarıda kalacak ve yalnızca sayfaların içeriği değişecek. */}
        <Grid container spacing={8}>
          <Grid item sm={8} xs={12}>
            <p>Content...</p>
          </Grid>
          <Grid item sm={4} xs={12}>
            <p>Profile...</p>
          </Grid>
        </Grid>
        </Navbar>
    )
  }
}

export default home