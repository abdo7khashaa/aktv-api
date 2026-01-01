module.exports = (req, res) => {
  // حماية بسيطة: لازم يرسل التطبيق مفتاح
  const key = req.headers["x-app-key"];
  if (key !== "AKTV-KEY-2026") {
    return res.status(401).json({ ok: false });
  }

  // رجّع اليوزر والباسورد (تقدر تغيّرهم بأي وقت بدون تحديث التطبيق)
  return res.json({
    ok: true,
    username: "224431844000",
    password: "618211192054"
  });
};
