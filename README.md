# ⚡ Type Speed Test

Modern ve kullanıcı dostu bir yazma hızı testi uygulaması. Yazma hızınızı (WPM) ve doğruluğunuzu ölçün, gelişiminizi takip edin!

[![Created by Serkanby](https://img.shields.io/badge/Created%20by-Serkanby-blue?style=flat-square)](https://serkanbayraktar.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Serkanbyx-181717?style=flat-square&logo=github)](https://github.com/Serkanbyx)

## 🎯 Özellikler

- **3 Zorluk Seviyesi**: Kolay, Orta ve Zor seviyelerden seçim yapın
- **Gerçek Zamanlı İstatistikler**: WPM (Words Per Minute), doğruluk yüzdesi ve süre takibi
- **Görsel Geri Bildirim**: Doğru ve yanlış yazılan karakterlerin anlık görsel vurgulaması
- **Skor Sistemi**: localStorage ile en iyi 10 skorunuzu kaydedin
- **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- **Modern UI/UX**: Temiz, minimal ve kullanıcı odaklı arayüz
- **Detaylı Sonuç Analizi**: Test sonunda kapsamlı performans raporu

## 🚀 Canlı Demo

[GitHub Pages'de Canlı Demo'yu Görüntüle](#) *(Yayınlandığında link eklenecek)*

## 📸 Ekran Görüntüleri

### Ana Ekran
Modern ve sezgisel zorluk seçimi ekranı

### Oyun Ekranı
Gerçek zamanlı istatistikler ve karakter vurgulama

### Sonuç Ekranı
Detaylı performans analizi ve skorlar

## 🛠️ Teknolojiler

- **HTML5**: Semantic ve accessible markup
- **CSS3**: Modern CSS özellikleri, Grid, Flexbox, Animations
- **Vanilla JavaScript (ES6+)**: Modern JavaScript özellikleri
- **LocalStorage API**: Veri saklama

## 💻 Kurulum

### Yerel Geliştirme

1. Repoyu klonlayın:
```bash
git clone https://github.com/kullanici-adi/type-speed-test.git
cd type-speed-test
```

2. Dosyaları bir web sunucusuyla çalıştırın:

**Python ile:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js ile (http-server):**
```bash
npx http-server -p 8000
```

**VS Code Live Server** extension kullanarak doğrudan `index.html` dosyasını açabilirsiniz.

3. Tarayıcınızda açın: `http://localhost:8000`

## 📖 Kullanım

1. **Zorluk Seçimi**: Kolay, Orta veya Zor seviyesinden birini seçin
2. **Test Başlangıcı**: Görünen metni input alanına yazmaya başlayın
3. **Yazma**: 60 saniye içinde metni doğru şekilde yazmaya çalışın
4. **Sonuç**: Süre bittiğinde veya metni tamamladığınızda sonuçlarınızı görün
5. **Skorlar**: En iyi performanslarınız otomatik olarak kaydedilir

## 🎮 Nasıl Çalışır?

### WPM (Words Per Minute) Hesaplama
```
WPM = (Doğru Karakter Sayısı / 5) / Geçen Dakika
```
Standart olarak 5 karakter = 1 kelime kabul edilir.

### Doğruluk Hesaplama
```
Doğruluk (%) = (Doğru Karakter / Toplam Yazılan Karakter) × 100
```

### Zorluk Seviyeleri

- **🟢 Kolay**: Kısa ve basit günlük cümleler (15-40 karakter)
- **🟡 Orta**: Normal uzunlukta metinler (50-100 karakter)
- **🔴 Zor**: Uzun ve karmaşık teknik cümleler (150-300 karakter)

## 🎨 Özelleştirme

### Kendi Metinlerinizi Ekleyin

`script.js` dosyasındaki `textCollections` objesini düzenleyerek kendi metinlerinizi ekleyebilirsiniz:

```javascript
const textCollections = {
    easy: [
        "Kendi kolay cümleniz...",
        // Daha fazla ekleyin
    ],
    medium: [
        "Kendi orta seviye cümleniz...",
    ],
    hard: [
        "Kendi zor seviye cümleniz...",
    ]
};
```

### Süreyi Değiştirin

`script.js` dosyasında `timeLeft` değerini değiştirerek test süresini ayarlayabilirsiniz:

```javascript
resetGameState() {
    // ...
    gameState.timeLeft = 60; // Saniye cinsinden
    // ...
}
```

### Renk Temasını Özelleştirin

`style.css` dosyasındaki `:root` değişkenlerini düzenleyerek renk temasını değiştirebilirsiniz:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --success-color: #10b981;
    --error-color: #ef4444;
    /* ... */
}
```

## 📊 Özellikler Detaylı

### ✅ Tamamlanan Özellikler

- ✅ Zorluk seviyesi seçimi (Kolay/Orta/Zor)
- ✅ 60 saniyelik zamanlayıcı
- ✅ Gerçek zamanlı WPM hesaplama
- ✅ Doğruluk yüzdesi takibi
- ✅ Karakter bazlı doğru/yanlış vurgusu
- ✅ LocalStorage ile skor kaydetme
- ✅ Seviye bazlı en iyi skorlar listesi
- ✅ Responsive tasarım
- ✅ Detaylı sonuç ekranı
- ✅ Accessibility özellikleri

### 🔮 Gelecek Özellikler (Opsiyonel)

- [ ] Farklı diller için destek
- [ ] Özel test süreleri (30s, 60s, 120s)
- [ ] Karanlık/Aydınlık tema geçişi
- [ ] Ses efektleri
- [ ] Klavye tuş vuruş animasyonları
- [ ] Grafiklerle ilerleme takibi
- [ ] Çoklu kullanıcı profilleri
- [ ] Sosyal medya paylaşım özellikleri

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları takip edin:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

### Commit Mesajı Formatı

- `feat:` Yeni özellik
- `fix:` Bug düzeltmesi
- `refactor:` Kod iyileştirmesi
- `docs:` Dokümantasyon değişikliği
- `style:` Kod formatı değişikliği
- `chore:` Diğer değişiklikler

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Serkan Bayraktar**

- Website: [serkanbayraktar.com](https://serkanbayraktar.com/)
- GitHub: [@Serkanbyx](https://github.com/Serkanbyx)
- Email: serkanbyx1@gmail.com

## 🙏 Teşekkürler

Bu projeyi geliştirirken kullanılan kaynaklar:

- Font: System Fonts (Inter, SF Pro, Segoe UI)
- İkonlar: Unicode Emoji
- Renk Paleti: Tailwind CSS Inspired

## 📞 İletişim

Sorularınız veya önerileriniz için:

- Issue açın: [GitHub Issues](https://github.com/Serkanbyx/type-speed-test/issues)
- E-posta: serkanbyx1@gmail.com
- Website: [serkanbayraktar.com](https://serkanbayraktar.com/)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

