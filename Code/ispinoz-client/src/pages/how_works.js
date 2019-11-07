import React, {Component} from 'react';
import Appbar from "../components/appbar";

class how_works extends Component {
    render() {
        return (
            <div className="pixel">
                <Appbar/>
                <h1>Genetik Algoritmanın Taslağı</h1>
                <h3> Aşağıdaki taslak genetik algoritmanın nasıl çalıştığını özetlemektedir: </h3>
                <h3> 1.Algoritma, rastgele bir ilk popülasyon oluşturarak başlar. </h3>
                <h3> 2.Algoritma daha sonra bir dizi yeni popülasyon oluşturur. Her adımda, algoritma bir sonraki popülasyonu oluşturmak için mevcut nesildeki bireyleri kullanır. Yeni popülasyon oluşturmak için algoritma aşağıdaki adımları gerçekleştirir:</h3>
           <h3>a.Uygunluk değerini hesaplayarak mevcut popülasyonun her üyesini puanlar. Bu değerlere işlenmemiş uygunluk puanı denir.</h3>
                <h3>b.İşlenmemiş uygunluk puanlarını daha kullanışlı bir değer aralığına dönüştürmek için ölçeklendirme yapılır. Bu ölçeklendirilmiş değerlere beklenti değerleri denir.</h3>
                <h3>c.Beklentilerine göre ebeveyn denilen üyeler seçilir. </h3>
                <h3>d.Mevcut popülasyonda uygunluğu düşük olan bireylerin bazıları elit olarak seçilir. Bu elit bireyler bir sonraki popülasyona geçirilir.</h3>
                <h3>e.Ebeveynlerden çocuk üretilir. Çocuklar ya tek bir ebeveyne rastgele değişiklikler yapılarak (mutasyon) ya da bir çift ebeveyne ait vektör girişlerini birleştirerek (çaprazlama) yapılarak üretilir.</h3>
                <h3>f.Yeni nesli oluşturmak için mevcut nüfus yeni oluşturulan çocuklarla değiştirilir. </h3>
                <h3>3.Durdurma ölçütlerinden biri karşılandığında algoritma durur.</h3>
            </div>
        );
    }
}


export default how_works;