import React, {Component} from 'react';
import Appbar from "../components/appbar";

class new_gene extends Component {
    render() {
        return (
            <div className="pixel">
                <Appbar/>
                <h1>Yeni Nesilin Yaratılması</h1>
                <h3> Her adımda, genetik algoritma, gelecek nesli oluşturan çocukları yaratmak için mevcut nüfusu kullanır. Algoritma, gelecek nesillere genleriyle katkıda bulunan, ebeveynler denilen bir grup bireyi seçer. Algoritma genellikle ebeveynler olarak uygunluğu en yüksek olan bireyleri seçer. Algoritmanın Seçim işlev(Selection function) alanında ebeveynleri seçmek için kullandığı işlevi belirleyebiliriz.</h3>
                <h3> Genetik algoritma, gelecek nesil için üç çeşit çocuk üretir:</h3>
                <h3> -Elitler, mevcut nesildeki bireyler arasında en iyi uygunluk değerine sahip bireylerdir. Bu bireyler otomatik olarak yeni nesil için seçilir.</h3>
                <h3>-Çaprazlama, bir çift ebeveynin genlerini birleştirilerek oluşturulur.</h3>
                <h3>-Mutasyon çocukları, tek bir ebeveynde rastgele değişiklikler yaparak üretilir.</h3>

            </div>
        );
    }
}


export default new_gene;