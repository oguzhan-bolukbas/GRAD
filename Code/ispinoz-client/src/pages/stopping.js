import React, {Component} from 'react';
import Appbar from "../components/appbar";

class stopping extends Component {
    render() {
        return (
            <div className="pixel">
                <Appbar/>
                <h1>Algoritmanın Durma Koşulları</h1>
                <h3> Genetik algoritma ne zaman duracağını belirlemek için aşağıdaki koşulları kullanır: </h3>
                <h3> - Nesiller : Algoritma nesiller sayısı Nesiller değerine ulaştığında durur.</h3>
                <h3>- Zaman sınırı : Algoritma,  belirlenen süre çalıştıktan sonra durur.</h3>
                <h3>- Uygunluk sınırı : Mevcut popülasyondaki en iyi nokta için uyumluluk fonksiyonun değeri uyumluluk sınırına eşit veya daha az olduğunda algoritma durur.</h3>
                <h3>- Durma kuşakları : Uygunluk fonksiyonu değerinde Durma kuşaklarına göre ortalama bağıl değişim, Fonksiyon toleransından düşük olduğunda algoritma durur.</h3>
                <h3>- Durma süresi sınırı : Durma süresi sınırına eşit saniye cinsinden bir süre boyunca nesnel işlevde bir gelişme olmazsa algoritma durur.</h3>
                <h3>- Durma testi : Durma koşulu, ortalama değişim veya geometrik ağırlıklı bir durumdur. Geometrik ağırlıklı için ağırlıklandırma fonksiyonu 1 / 2n'dir, burada n akımdan önceki nesillerin sayısıdır. Her iki durak koşulu da, zindelik işlevindeki Durak jenerasyonundaki nispi değişime uygulanır.</h3>
                <h3>- Fonksiyon toleransı : Algoritma, Stall nesillerindeki uygunluk fonksiyon değerindeki ortalama nispi değişiklik, Fonksiyon toleransından daha az olana kadar çalışır.</h3>
                <h3>Algoritma, bu koşullardan herhangi biri karşılandığı anda durur.</h3>

            </div>
        );
    }
}


export default stopping;