const initToken = async () => {
    let myMciToken; let shopToken;
    try {
      ([myMciToken, shopToken] = await Promise.all([
        myMciTokens(),
        shopTokens(),
      ]));
      await cache.set('myMciToken', myMciToken);
      await cache.set('shopToken', shopToken);
      return;
    } catch (error) {
      if (error) return 'mci services is not accessible';
    }
  };



  const { initToken } = require('../services/mci');

  const getToken = async (channelId) => {
    const result = await initToken();
    if (result) return { error: result };
    let token;
    let password;
  
    if (channelId === '693') {
      token = await cache.get('myMciToken');
      password = global.CONFIG.mciConfig.my.channelPassword;
    } else {
      token = await cache.get('shopToken');
      password = global.CONFIG.mciConfig.shop.channelPassword;
    }
    return { token, password };
  };