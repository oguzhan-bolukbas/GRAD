import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "900px",
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography color={"primary"} variant="h5" component="h3">
        Genetik Algoritma'nın Uygulama Alanları
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>Karmaşık  problemleri  hızlı  ve  optimale  yakın  olarak  çözebilen genetik  algoritmalar,
        çeşitli problem  tiplerine  uygulanabilmektedir.  Büyük çözüm  uzaylarının  geleneksel
        yöntemlerle  taranması  hesaplama  zamanını arttırmaktadır.  Ancak  bu  tip  problemlere,
        genetik  algoritmalar  ile  kısa sürede, kabul  edilebilir çözümler  bulunabilmektedir  (Gonzales,  2000:  683).
        Genetik  algoritmalar  özellikle çözüm  uzayının  geniş,  süreksiz ve  karmaşık olduğu problem
        tiplerinde başarılı sonuçlar vermektedir.  Genetik  algoritmaların  uygulama  alanları  bu  çalışmada
        genel uygulama alanları  ve işletmelerdeki yaygın  uygulama  alanları  olmak üzere iki sınıfa ayrılarak
        incelenmiştir. <br/> <br/>
        <Typography color={"primary"} variant="h6"  component="p">
          Genel Uygulama Alanları
        </Typography>

        <Typography align={"justify"}  component="p">
          Optimizasyon <br/>
          Otomatik Programlama ve Bilgi Sistemleri <br/>
          Mekanik Öğrenme <br/>
          Ekonomik ve Sosyal Sistem Modelleri <br/>
          Araç Rotalama Problemi <br/>
          Minimum Yayılan Ağaç Problemi <br/>
          Taşıma Problemi <br/>
        </Typography>

        <Typography color={"primary"} variant="h6"  component="p">
          <br/> İşletmelerdeki Uygulama Alanları
        </Typography>

        <Typography align={"justify"}  component="p">
          Finans <br/>
          Pazarlama <br/>
          Çizelgeleme Problemi <br/>
          Gezgin Satıcı Problemi  <br/>
        </Typography>




      </Typography>
    </Paper>
  );
}