# keyboard.php
 router.get('/keyboard', (req, res) => {
  const menu = {
      type: 'buttons',
      buttons: ["메뉴1", "메뉴2", "메뉴3"]
  };

  res.set({
      'content-type': 'application/json'
  }).send(JSON.stringify(menu));
});
