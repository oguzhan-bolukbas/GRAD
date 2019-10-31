import React, {Component} from 'react';
import Appbar from "../components/appbar";

class Deneme extends Component {
    render() {
        return (
            <div className="pixel">
                <Appbar/>
                <h1>Genetik Algoritma Nedir?</h1>
                <h3>Genetik algoritma hem kısıtlı hem de kısıtsız optimizasyon problemlerini çözmek için kullanılan bir yöntemdir. Algoritmanın temeli biyolojik evrimi tetikleyen süreç olan doğal seleksiyona dayanır.
                    Genetik algoritma, bireysel çözümler popülasyonunu tekrar tekrar değiştirerek en iyi çözüme ulaşmaya çalışır. Her adımda, genetik algoritma mevcut popülasyondan rastgele ebeveynler seçer ve onları gelecek nesilin çocuklarını üretmek için kullanır.
                    Ardışık nesiller boyunca, popülasyon optimum bir çözüme doğru evrilir. Genetik algoritma süreksiz, türevi olmayan, stokastik veya doğrusal olmayan problemler dahil olmak üzere standart optimizasyon algoritmaları için uygun olmayan çeşitli optimizasyon problemlerini çözmek için kullanılabilir.</h3>
          <h3>Genetik algoritma, mevcut popülasyondan bir sonraki nesli oluşturmak için her adımda üç ana kural kullanır:</h3>
                <h3>   -Seçim kuralları, gelecek nesilde nüfusa katkıda bulunan, ebeveyn adı verilen bireyleri seçer.</h3>
                <h3>   -Çaprazlama kuralları, gelecek nesiller için çocukları oluşturmak üzere iki ebeveyni birleştirir.</h3>
                <h3> -Mutasyon kuralları, çocukları oluşturmak için ebeveynlere rastgele değişiklikler uygular.</h3>
            </div>
        );
    }
}


export default Deneme;