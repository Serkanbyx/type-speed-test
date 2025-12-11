# 🚀 GitHub Pages'e Deployment Rehberi

Bu rehber, Type Speed Test uygulamanızı GitHub Pages'te nasıl yayınlayacağınızı adım adım açıklar.

## 📋 Ön Gereksinimler

- GitHub hesabı
- Git kurulu olmalı
- Proje dosyaları hazır olmalı

## 🔧 Adım Adım Deployment

### 1. GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluşturun
2. Repository adını girin (örn: `type-speed-test`)
3. Public olarak işaretleyin
4. README veya diğer dosyaları eklemeyin (zaten mevcutlar)

### 2. Yerel Projeyi Git ile Bağlama

Proje klasöründe terminal açın ve şu komutları çalıştırın:

```bash
# Git repository'sini initialize edin
git init

# Dosyaları staging area'ya ekleyin
git add .

# İlk commit'i yapın
git commit -m "feat: initial commit - type speed test app"

# Ana branch'i main olarak adlandırın (opsiyonel)
git branch -M main

# Remote repository ekleyin (YOUR-USERNAME yerine kendi kullanıcı adınızı yazın)
git remote add origin https://github.com/YOUR-USERNAME/type-speed-test.git

# Kodu GitHub'a push edin
git push -u origin main
```

### 3. GitHub Pages'i Etkinleştirme

#### Yöntem 1: Repository Settings (Önerilen)

1. GitHub'da repository'nize gidin
2. **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçeneğini bulun
4. **Source** bölümünde:
   - Branch: `main` seçin
   - Folder: `/ (root)` seçin
5. **Save** butonuna tıklayın
6. Birkaç dakika bekleyin, sayfanız şu adreste yayında olacak:
   ```
   https://YOUR-USERNAME.github.io/type-speed-test/
   ```

#### Yöntem 2: GitHub Actions (Otomatik Deployment)

`.github/workflows/deploy.yml` dosyası oluşturun:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### 4. Doğrulama

1. GitHub Pages URL'inize gidin
2. Uygulamanın düzgün çalıştığını kontrol edin
3. Farklı cihazlarda test edin (mobil, tablet, masaüstü)

## 🔄 Güncelleme Yapmak

Proje üzerinde değişiklik yaptığınızda:

```bash
# Değişiklikleri staging area'ya ekleyin
git add .

# Commit yapın (açıklayıcı mesaj yazın)
git commit -m "fix: bug düzeltmesi"

# GitHub'a push edin
git push origin main
```

GitHub Pages otomatik olarak güncellenecektir (1-2 dakika içinde).

## 🛠️ Sorun Giderme

### Problem: Sayfa 404 Hatası Veriyor

**Çözüm:**

1. Repository ayarlarından GitHub Pages'in aktif olduğunu kontrol edin
2. Branch ve folder seçimlerinin doğru olduğunu kontrol edin
3. 5-10 dakika bekleyin, deployment işlemi zaman alabilir

### Problem: CSS/JS Dosyaları Yüklenmiyor

**Çözüm:**

1. Dosya yollarının doğru olduğunu kontrol edin (relative path kullanın)
2. Dosya isimlerinde büyük/küçük harf duyarlılığına dikkat edin
3. Browser console'da hata mesajlarını kontrol edin

### Problem: LocalStorage Çalışmıyor

**Çözüm:**

- LocalStorage HTTPS'de çalışır, GitHub Pages HTTPS kullanır, sorun olmamalı
- Browser'ın localStorage'ı desteklediğinden emin olun
- Privacy/Incognito modda localStorage kısıtlı olabilir

## 🎯 Özel Domain Kullanımı (Opsiyonel)

Kendi domain'inizi kullanmak isterseniz:

1. Repository root'una `CNAME` dosyası ekleyin:

   ```
   www.yourdomain.com
   ```

2. Domain sağlayıcınızda DNS ayarları:

   ```
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```

3. GitHub Pages ayarlarında "Custom domain" alanına domain'inizi girin

## 📊 Analytics Ekleme (Opsiyonel)

Google Analytics eklemek için `index.html` dosyasının `<head>` bölümüne:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

## ✅ Checklist

Deployment yapmadan önce kontrol edin:

- [ ] Tüm dosyalar commit edildi mi?
- [ ] README.md güncellendi mi?
- [ ] Demo URL README'ye eklendi mi?
- [ ] GitHub repository ayarları doğru mu?
- [ ] GitHub Pages aktif mi?
- [ ] Mobil uyumluluk test edildi mi?
- [ ] Tarayıcı uyumluluğu kontrol edildi mi?
- [ ] Console'da hata var mı?

## 🎉 Başarılı Deployment Sonrası

1. README.md'deki demo URL'ini güncelleyin
2. Repository description'a demo URL'i ekleyin
3. Sosyal medyada paylaşın
4. LinkedIn/Portfolio'ya ekleyin
5. Friends & family ile test edin

## 📞 Yardım

Sorun yaşarsanız:

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community/)
- Repository Issues bölümü

---

**Tebrikler! 🎉** Uygulamanız artık canlı ve dünya çapında erişilebilir durumda!
