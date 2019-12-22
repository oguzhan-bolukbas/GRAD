import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ruletGrafik from "../images/ruletGrafik.JPG";


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
        Seçim Türleri
      </Typography>
      <Typography align={"justify"} component="p">
        <br/>Popülasyondaki bütün bireylerin uygunluk
        fonksiyonu hesaplandıktan sonra, bunlardan
        bazıları yeni kuşaklar üretmek için seçilirler. Genelde, popülasyonun büyüklüğünün
        değişmesine (artmasına) izin verilmez. <br/>
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Rulet Yöntemiyle Seçim : </b>
        Kromozomlar uygunluklarına göre seçilirler. Daha iyi kromozomlar, daha fazla seçilme şansına sahip olanlardır.
        <br/>• Popülasyondaki tüm kromozomların yerleştirildiği
        bir rulet tekerini hayal edelim.
        <br/>• Rulet tekeri üzerindeki kromozomun yerinin
        boyutu kromozomun uygunluğuyla orantılıdır.
        <br/>• Daha uygun olan kromozom daha geniş bir kısma
        sahip olur.
        <br/>
        Eğer uygunluk değerleri arasında büyük
        farklar varsa problemler ortaya çıkacaktır. Örneğin, eğer en iyi kromozomun uygunluğu
        diğer tüm kromozomların toplamının %90’ı
        ise diğer kromozomların seçilme şansı çok
        azalacaktır. Bunu önlemek için sıralı seçim kullanılabilir.
        <br/>

        <Grid container justify="center" alignItems="center">
          Örneğin: Uygunluk fonksiyonu: f(x) = x²
          <br/> Birey 1: 1101, x = 13, x² = 169
          <br/> Birey 2: 0100, x = 4, x² = 16
          <br/> Birey 3: 1011, x = 11, x² = 121
          <br/> Birey 4: 1000, x = 8, x² = 64
          <br/>
          <Grid container justify="center" alignItems="center">
            <img src={ruletGrafik} width={350}/>
          </Grid>

          <br/>Rulet 1 defa çevrildiğinde gelme ihtimalleri:
          <br/>Toplam = 169 + 16 + 121 + 64 = 370
          <br/>Birey 1: 169/370 = %46
          <br/>Birey 2: 16/370 = %4
          <br/>Birey 3: 121/370 = %33
          <br/>Birey 4: 64/370 =%17
        </Grid>
      </Typography>


      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Sıralı Seçim Yöntemi : </b>
        Sıralı seçimde en kötü uyumlulukta olan
        kromozoma 1 değeri, sonrakine 2 değeri, …,
        sonuncuya N (birey sayısı) verilir. Böylelikle seçilmede bunlara öncelik tanınmış
        olur. Bu şekilde onların da seçilme şansı artar. Ancak bu yöntem, çözümün daha geç
        yakınsamasına neden olabilir. <br/>
      </Typography>

      <Typography align={"justify"} component="p">
        <br/>
        <b color={"primary"}>Sabit Durum Yöntemi : </b>
        Her yeni nesilde yüksek uygunluk değerine
        sahip kromozomlar yeni çocukları oluşturmak
        için seçilir. Düşük uygunluk değerine sahip çocuklar
        kaldırılarak yerlerine bu yeni oluşturulan
        çocuklar konur. Toplumun geri kalan kısmı da aynen yeni
        nesle aktarılır. <br/><br/>
      </Typography>
    </Paper>
  );
}