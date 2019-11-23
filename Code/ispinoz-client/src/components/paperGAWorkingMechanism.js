import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import Filter7Icon from '@material-ui/icons/Filter7';

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
        Genetik Algoritma Nasıl Çalışır?
      </Typography>
      <Typography align={"justify"} component="p">
        <br/><Filter1Icon color={"primary"}/> Olası çözümlerin kodlandığı bir çözüm grubu oluşturulur. Çözüm
        grubuna biyolojideki benzerliği nedeniyle populasyon, çözümlerin kodları da
        kromozom olarak adlandırılır. Bu adıma populasyonda bulunan birey sayısı
        belirleyerek başlanır. Bu sayı için bir standart yoktur. Genel olarak önerilen
        100- 300 aralığında bir büyüklüktür. Büyüklük seçiminde yapılan işlemlerin
        karmaşıklığı ve aramanın derinliği önemlidir. Populasyon bu işlemden sonra
        rasgele oluşturulur.
        <br/><Filter2Icon color={"primary"}/> Her kromozomun ne kadar iyi olduğu bulunur. Kromozomların ne
        kadar iyi olduğunu bulan fonksiyona uygunluk fonksiyonu denir. Bu
        fonksiyon işletilerek kromozomların uygunluklarının bulunmasına ise
        hesaplama (evalution) adı verilir. Bu fonksiyon genetik algoritmanın beynini
        oluşturmaktadır. GA da probleme özel çalışan tek kısım bu fonksiyondır.
        Çoğu zaman GA nın başarısı bu fonksiyonun verimli ve hassas olmasına
        bağlı olmaktadır.
        <br/><Filter3Icon color={"primary"}/> Bu kromozomlar eşleyerek yeniden kopyalama ve değiştirme
        operatörleri uygulanır. Bu sayede yeni bir populasyon oluşturulur.
        Kromozomların eşlenmesi kromozomların uygunluk değerlerine göre
        yapılır. Bu seçimi yapmak için rulet tekerleği seçimi, turnuva seçimi
        gibi seçme yöntemleri vardır.
        <br/><Filter4Icon color={"primary"}/> Yeni kromozomlara yer açmak için eski kromozomlar ortadan
        kaldırılır. Eski kromozomlar çıkartılarak sabit büyüklükte bir
        populasyon sağlanır.
        <br/><Filter5Icon color={"primary"}/> Tüm kromozomlar n uygunlukları tekrar hesaplanır. Tüm
        kromozomlar yeniden hesaplanarak yeni populasyonun başarısı
        bulunur.
        <br/><Filter6Icon color={"primary"}/> GA defalarca çalıştırılarak çok sayıda populasyon oluşturulup
        hesaplanır. Eğer zaman dolmamışsa 3. adıma gidilir.
        <br/><Filter7Icon color={"primary"}/> O ana kadar bulunan en iyi kromozom sonuçtur. Çünkü
        populasyonların hesaplanmasında en iyi bireyler saklanmıştır.

        <br/><br/><br/>
      </Typography>


    </Paper>
  );
}