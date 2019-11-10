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
          Genetik Algoritma Nedir?
        </Typography>
        <Typography align={"justify"} component="p">
          <br/>Genetik algoritma hem kısıtlı hem de kısıtsız optimizasyon problemlerini çözmek için kullanılan bir yöntemdir. Algoritmanın temeli biyolojik evrimi tetikleyen süreç olan doğal seleksiyona dayanır.
          Genetik algoritma, bireysel çözümler popülasyonunu tekrar tekrar değiştirerek en iyi çözüme ulaşmaya çalışır. Her adımda, genetik algoritma mevcut popülasyondan rastgele ebeveynler seçer ve onları gelecek nesilin çocuklarını üretmek için kullanır.
          Ardışık nesiller boyunca, popülasyon optimum bir çözüme doğru evrilir. Genetik algoritma süreksiz, türevi olmayan, stokastik veya doğrusal olmayan problemler dahil olmak üzere standart optimizasyon algoritmaları için uygun olmayan çeşitli optimizasyon problemlerini çözmek için kullanılabilir.
          Genetik algoritma, mevcut popülasyondan bir sonraki nesli oluşturmak için her adımda üç ana kural kullanır: <br/>
          <br/>-Seçim kuralları, gelecek nesilde nüfusa katkıda bulunan, ebeveyn adı verilen bireyleri seçer.
          <br/>-Çaprazlama kuralları, gelecek nesiller için çocukları oluşturmak üzere iki ebeveyni birleştirir.
          <br/>-Mutasyon kuralları, çocukları oluşturmak için ebeveynlere rastgele değişiklikler uygular.
        </Typography>
      </Paper>
  );
}