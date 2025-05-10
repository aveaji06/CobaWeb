const sendTelegramMessage = async (message: string) => {
  const token = '8019057654:AAEfyq5WxclzlHfRLxiuxAx9PL8WD2G3w2U';
  const chatId = '@CobaEWS'; // nama channel harus diawali @ dan bot harus admin di sana
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const result = await response.json();
    if (!response.ok) {
      console.error('Telegram API Error:', result);
    } else {
      console.log('Pesan berhasil dikirim:', result);
    }
  } catch (error) {
    console.error('Gagal mengirim pesan Telegram:', error);
  }
};

export default sendTelegramMessage;
