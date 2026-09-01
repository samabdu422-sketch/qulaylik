# 🚀 Qulaylik - Real-Time Messaging Application

Qulaylik - Telegram ga o'xshagan zamonaviy real-time messaging ilovasi iOS, Android va Windows platformalari uchun.

## 📱 Qo'llab-Quvvatlanayotgan Platformalar

- **iOS** - Swift va SwiftUI bilan
- **Android** - Kotlin va Jetpack Compose bilan
- **Windows** - C# va WinUI 3 bilan
- **Backend** - Node.js va Express.js bilan

## ✨ Asosiy Xususiyatlar

- 💬 Real-time messaging (Socket.io orqali)
- 👥 Foydalanuvchi profili va autentifikatsiya
- 📸 Media yuborish (rasm, video, fayl)
- 🔔 Push notifications
- 🔒 End-to-end encryption
- 👫 Guruhlar va channels
- 🌙 Dark mode
- 🌍 Multi-language support

## 📁 Loyiha Struktura

```
qulaylik/
├── iOS/                    # iOS app (Swift/SwiftUI)
├── Android/                # Android app (Kotlin)
├── Windows/                # Windows app (C#/WinUI)
├── Backend/                # Backend server (Node.js)
├── .gitignore
└── README.md
```

## 🛠️ Texnologiya Stack

### Frontend
| Platform | Texnologiya | Status |
|----------|-----------|--------|
| iOS | Swift, SwiftUI, CoreData | 🔄 Boshlash |
| Android | Kotlin, Jetpack Compose, Room | 🔄 Boshlash |
| Windows | C#, WinUI 3, SQLite | 🔄 Boshlash |

### Backend
| Komponent | Texnologiya |
|-----------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| Real-time | Socket.io |
| Authentication | JWT |

## 🚀 Boshlanish

### iOS
```bash
cd iOS
pod install
xed Qulaylik.xcworkspace
```

### Android
```bash
cd Android
./gradlew build
# Android Studio'da ochish
```

### Windows
```bash
cd Windows
dotnet restore
dotnet build
```

### Backend
```bash
cd Backend
npm install
npm run dev
```

## 📋 Talablar

### iOS
- Xcode 14+
- iOS 14+
- CocoaPods

### Android
- Android Studio 2022.1+
- SDK 28+
- Kotlin 1.7+

### Windows
- Visual Studio 2022+
- .NET 6+

### Backend
- Node.js 16+
- MongoDB 4.4+
- npm 8+

## 🔐 Muhit O'zgaruvchilari

Backend uchun `.env` faylini yaratish:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/qulaylik
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
SOCKET_PORT=3001
```

## 📚 Hujjatlar

- [iOS Setup Guide](iOS/README.md)
- [Android Setup Guide](Android/README.md)
- [Windows Setup Guide](Windows/README.md)
- [Backend Setup Guide](Backend/README.md)

## 🤝 Hissa Qo'shish

1. Repository'ni fork qiling
2. Feature branch yarating (`git checkout -b feature/amazing-feature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add amazing feature'`)
4. Branch'ga push qiling (`git push origin feature/amazing-feature`)
5. Pull Request oching

## 📄 Litsenziya

Bu loyiha MIT Litsenziyasi ostida.

## 📞 Aloqa

Savollaringiz bo'lsa, issue ochishingiz yoki pull request yuborishingiz mumkin.

---

**Qulaylik** - Barcha platformalarda qulay va tez xabarlar!

🌟 Agar bu loyiha sizga yoqsa, star qo'shishni o'tkazib qo'ymasin! 🌟
