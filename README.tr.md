Hoş geldiniz, yaratıcı zihinlerin etimoloji veri tabanımızı projelerinde nasıl kullanacaklarını görmek için sabırsızlanıyoruz.

EtimolojiTurkce.com, yaklaşık **14 bin Türkçe kelimenin** etimolojik açıklamasını barındıran, günlük 3 binden fazla ziyaretçisi olan ve Türkçe sözcüklere özel olarak tasarlanmış bir arama moturuna sahip dijital bir platformdur.

etimolojiturkce.com HTTP API'sini projelerinizde nasıl kullanabileceğinize dair örnekleri bu dokümantasyon ve depo sayesinde görüntüleyebilirsiniz.

### Veri Tabanı Durumunu Görüntüleyin

Veri tabanı hizmetinin çalışıp çalışmadığını görmenize olanak tanır.

```
GET https://api.etimolojiturkce.com/status

{
  "status":"1",
  "message":"Service is UP"
}
```

### Bir Kelimenin Verilerini Alın

Belirli bir kelime ile ilgili tüm etimoloji verilerini almanızı sağlar.

```
GET https://api.etimolojiturkce.com/word/{KELİME} (Örneğin: çoban)

{
  "return": "1",
  "word": "çoban",
  "derivedLang": "Ave",
  "explanation": "~ Fa çobān/çubān/şubān/şivān چوبان/چبان/شبان/شوان davar güden &lt;&lt; OFa şupān a.a. (=? Ave *fşu-pāna- a.a. § Ave fşu- davar + Ave pāna- koruyan, gözeten ) &#8594; +ban",
  "root": " Farsça  çobān veya çubān veya şubān veya şivān  چوبان/چبان/شبان/شوان z  \"davar güden\" sözcüğünden alıntıdır.  Farsça sözcük Orta Farsça (Pehlevice veya Partça)  aynı anlama gelen  şupān sözcüğünden evrilmiştir.  (NOT:  Bu sözcük Avesta (Zend) dilinde  aynı anlama gelen  yazılı örneği bulunmayan  *fşu-pāna- sözcüğü ile eş kökenli olabilir; ancak bu kesin değildir.  Avestaca sözcük Avesta (Zend) dilinde  fşu-  \"davar\" ve  Avesta (Zend) dilinde  pāna-  \"koruyan, gözeten\" sözcüklerinin bileşiğidir. ) Daha fazla bilgi için +ban maddesine  bakınız. ",
  "firstInHistory": "çobān [ ed. Borovkov,  Orta Asya'da Bulunmuş Kuran Tefsirinin... (1300 yılından önce) ]çobān [ Aşık Paşa,  Garib-name (1330) ]çupān [ PavC (1500 yılından önce) ]",
  "additional": "Karş. Kürtçe (Kurmanci) şivân (aynı anlamda). Ortaasya Türkçesinden itibaren kaydedilmiş olan sözcüğün Türkçeye Kürtçeden alınmış olma ihtimali yoktur. || Çoban yıldızı deyiminde kastedilen Çolpan yıldızı 'dır. "
}
```

- **_return:_** Eğer kelime veri tabanında varsa 1, yoksa 0 sonucunu verir.
- **_word:_** Kelimenin düzeltilmiş hali.
- **_derivedLang:_** Kelimenin hangi dilden türediği bilgisi.
- **_explanation:_** Kelimenin köklerinin açıklaması ve anlamı.
- **_firstInHistory:_** Kelimenin ilk kez kullanıldığı Türkçe kitap bilgisi.
- **_additional:_** Kelime ve kökleri hakkında ek bilgiler.

### Rastgele Bir Kelimenin Verilerini Alın

Veri tabanından rastgele bir kelimeinin verilerini almanızı sağlar.

```
GET https://api.etimolojiturkce.com/word/random

{
  "return":"1",
  "word":"beyhude",
  ---ek bilgiler burada yer alacaktır---
}
```

### Birden Fazla Rastgele Kelime Üretin

Rastgele kelimeler üretmenize olanak tanır.

```
GET https://api.etimolojiturkce.com/word/random&q={quantity} (Örneğin:5, Maks:10)

["sardalya","kar\u015f\u0131","mucit","hedonizm","delalet"]
```

Birden fazla keliemeyi barındıran dizi döndürür.

### Kelime Arayın

Veri tabanında bulunan mevcut kelimeler arasında arama yapmanızı sağlar.

```
GET https://api.etimolojiturkce.com/search/{İFADE} (Örneğin: aba)

{
  "return":"1",
  "0":"aba",
  "1":"abanmak",
  "2":"acaba",
  "3":"akraba",
  "4":"babagannu\u015f",
  "5":"caba",
  "6":"daraba",
  "7":"gabavet",
  "8":"gulyabani",
  "9":"habaset"
}
```

Bu JSON çıktısında, `return` değerinin "1" olması arana ifadenin veri tabanında varolduğu anlamına gelir. Eğer `return` değeri "0" ise sözcük mevcut değildir. Arama sonuçları listelenmiştir. _En fazla 10 kelime listelenir._

## Javascript API ile Örnekler

API hizmeti JavaScript için kullanılmaya hazırdır. Bu bölümde JavaScript ile nasıl kullanabileceğinize dair bazı örnekler verilmiştir.

`etimolojiturkce.js` dosyasını indirin ve sayfanıza dahil edin:

`<script type="text/javascript" src="sizin/js/dizininiz/etimolojiturkce.js"></script>`

`etimolojiTurkceApi()` fonksiyonu ile birkaç örnek:

```
       etimolojiTurkceApi("word", "sadasd", function(w){
            console.log(w); // kelime bulunamadı
       }, 1);

       etimolojiTurkceApi("word", "mahal", function(w){
            console.log(w); // kelimeyi verir
       }, 1);

       etimolojiTurkceApi("search", "aba", function(w){
            console.log(w); // arama sonuçlarını verir
       }, 10);

       etimolojiTurkceApi("word", "random", function(w){
            console.log(w); // rastgele kelimeler üretir.
       }, 5);

       etimolojiTurkceApi("word", "random", function(w){
            console.log(w); // sadece bir tane rastgele kelime üretir.
       }, 0);

```

- Başka örnekler göstermek ister misiniz? Örneklerinizi `/js-examples` klasörüne pull request olarak gönderebilirsiniz.
- Kullanıdığınız programlama dilinde `etimolojiTurkceApi()` fonksiyonunu uyguladınız mı? Öyleyse kodunuzu ana dizine pull request olarak gönderebilirsiniz.

## Öneriler

Bu API'yi beğendiniz mi? Evet, daha iyi olabilir. Eğer herhangi bir öneriniz var ise issue açarak bizimle paylaşabilir ve bu API'nin geliştirilmesine katkı sunabilirsiniz. Bu API'yi kullandığınız projeleriniz ile bizi güncel tutmayı unutmayın. Teşekkürler!

## Kaynaklar ve Lisans

BU YAZILIM “HİÇBİR DEĞİŞİKLİK YAPILMADAN” ESASINA BAĞLI OLARAK, TİCARETE ELVERİŞLİLİK, ÖZEL BİR AMACA UYGUNLUK VE İHLAL OLMAMASI DA DAHİL VE BUNUNLA KISITLI OLMAKSIZIN AÇIKÇA VEYA ÜSTÜ KAPALI OLARAK HİÇBİR TEMİNAT OLMAKSIZIN SUNULMUŞTUR. HİÇBİR KOŞULDA YAZARLAR VEYA TELİF HAKKI SAHİPLERİ HERHANGİ BİR İDDİAYA, HASARA VEYA DİĞER YÜKÜMLÜLÜKLERE KARŞI, YAZILIMLA VEYA KULLANIMLA VEYA YAZILIMIN BAŞKA BAĞLANTILARIYLA İLGİLİ, BUNLARDAN KAYNAKLANAN VE BUNLARIN SONUCU BİR SÖZLEŞME DAVASI, HAKSIZ FİİL VEYA DİĞER EYLEMLERDEN SORUMLU DEĞİLDİR.
