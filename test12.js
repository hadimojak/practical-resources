
const baminoAdapters = {
    errors: [
      {
        code: '8080',
        mappedCode: '6218',
        message: 'Change Age Error',
      },
      {
        code: '9000',
        mappedCode: '6219',
        message: 'legal problem',
      },
      {
        code: '9001',
        mappedCode: '6220',
        message: 'Subscriber Error',
      },
      {
        code: '9002',
        mappedCode: '6221',
        message: 'Student Error',
      },
      {
        code: '9003',
        mappedCode: '6222',
        message: 'Anarestan Error',
      },
      {
        code: '9004',
        mappedCode: '6223',
        message: 'Organization Error',
      },
      {
        code: '9005',
        mappedCode: '6224',
        message: 'VoLTE Error',
      },
      {
        code: '9009',
        mappedCode: '6225',
        message: 'Ebcom Connection Error',
      },
      {
        code: '1001',
        mappedCode: '6226',
        message: 'General Error',
      },
      {
        code: '1003',
        mappedCode: '6227',
        message: 'User Not Parent',
      },
      {
        code: '1005',
        mappedCode: '6228',
        message: 'Invalid Name',
      },
      {
        code: '1008',
        mappedCode: '6229',
        message: 'Duplicate Profile',
      },
      {
        code: '1009',
        mappedCode: '6230',
        message: 'Family Right Error',
      },
      {
        code: '1011',
        mappedCode: '6231',
        message: 'Registration Error',
      },
      {
        code: '1012',
        mappedCode: '6232',
        message: 'Invalid Profile',
      },
      {
        code: '1012',
        mappedCode: '6232',
        message: 'Invalid Profile',
      },
      {
        code: '1017',
        mappedCode: '6233',
        message: 'Repeated Package',
      },
      {
        code: '1018',
        mappedCode: '6234',
        message: 'Repeated Password',
      },
      {
        code: '1019',
        mappedCode: '6235',
        message: 'Invalid Password',
      },
      {
        code: '1013',
        mappedCode: '6235',
        message: 'Invalid Password',
      },
      {
        code: '1020',
        mappedCode: '6236',
        message: 'Password Compatibility Error',
      },
      {
        code: '1021',
        mappedCode: '6237',
        message: 'Password Not Defined',
      },
      {
        code: '1022',
        mappedCode: '6238',
        message: 'Invalid Package',
      },
      {
        code: '1023',
        mappedCode: '6239',
        message: 'Over Limitation',
      },
      {
        code: '1024',
        mappedCode: '6240',
        message: 'Profile Already Activated',
      },
      {
        code: '1025',
        mappedCode: '6241',
        message: 'Profile Already Deactivated',
      },
      {
        code: '1026',
        mappedCode: '6242',
        message: 'Invalid Field',
      },
      {
        code: '1027',
        mappedCode: '6243',
        message: 'parent can not be added in another family',
      },
    ],
    packageItems: [
      {
        code: '1',
        title: 'هزاربوم',
        description: `<html dir="rtl" lang="fa" align="justify">
        <div style="direction: rtl;font-size: 14px;line-height: 20px;">
        <strong style="color:#C45911 ;display: block;margin-bottom: 5px;"><h3>هزاربوم (مخصوص فرزندان 15 تا 18 سال)</h3></strong>
                <strong style="color:#28af45 ;display: block;margin-bottom: 5px;">با انتخاب طرح هزاربوم فرزند شما به سایت های زیر دسترسی خواهند داشت:</strong>
        <strong style="color:#191970 ;display: block;margin-bottom: 5px;"><b>زیرساخت‌های آموزشی (مانند اسکای روم) / شاد / فیلیمو مدرسه / پویا تی وی / نهال تی وی / آپارات کودک / توپ مارکت / درسا بازار / مایکت / کافه بازار / واتساپ / ایتا / آپارات / ذره بین / نشان / ورزش ۳ / تپسی / زنبیل / اسنپ مارکت / دیجی کالا / ویکیپدیا</b></strong>
                <strong style="color:red ;display: block;margin-bottom: 5px;">با انتخاب طرح هزاربوم فرزند شما به سایت های زیر دسترسی نخواهند داشت:</strong>
                <strong style="color:#191970 ;display: block;margin-bottom: 5px;"><b>اینستاگرام / گوگل</b></strong>
          </div>
        </html>`,
      },
      {
        code: '2',
        title: 'صدبوم',
        description: `<html dir="rtl" lang="fa" align="justify">
        <div style="direction: rtl;font-size: 14px;line-height: 20px;">
        <strong style="color:#C45911 ;display: block;margin-bottom: 5px;"><h3>صدبوم (مخصوص فرزندان 11 تا 15 سال)</h3></strong>
                <strong style="color:#28af45 ;display: block;margin-bottom: 5px;">با انتخاب طرح صدبوم فرزند شما به سایت های زیر دسترسی خواهند داشت:</strong>
        <strong style="color:#191970 ;display: block;margin-bottom: 5px;"><b>زیرساخت‌های آموزشی (مانند اسکای روم) / شاد / فیلیمو مدرسه / پویا تی وی / نهال تی وی / آپارات کودک / توپ مارکت / درسا بازار / مایکت / واتساپ / ایتا / ذره بین / نشان / ورزش ۳ / تپسی / زنبیل</b></strong>
                <strong style="color:red ;display: block;margin-bottom: 5px;">با انتخاب طرح صدبوم فرزند شما به سایت های زیر دسترسی نخواهند داشت:</strong>
                <strong style="color:#191970 ;display: block;margin-bottom: 5px;"><b>کافه بازار / آپارات / اینستاگرام / گوگل / اسنپ مارکت / دیجی کالا / ویکیپدیا</b></strong>
          </div>
        </html>`,
      },
      {
        code: '3',
        title: 'ده بوم',
        description: `<html dir="rtl" lang="fa" align="justify">
        <div style="direction: rtl;font-size: 14px;line-height: 20px;">
        <strong style="color:#C45911 ;display: block;margin-bottom: 5px;"><h3>ده‌بوم (مخصوص فرزندان 7 تا 11 سال)</h3></strong>
                <strong style="color:#28af45 ;display: block;margin-bottom: 5px;">با انتخاب طرح ده‌بوم فرزند شما به سایت های زیر دسترسی خواهند داشت:</strong>
        <strong style="color:#191970 ;display: block;margin-bottom: 5px;"> <b>زیرساخت‌های آموزشی (مانند اسکای روم) / شاد / فیلیمو مدرسه / پویا تی وی / نهال تی وی / توپ مارکت / درسا بازار / واتساپ / ذره بین / نشان / ورزش ۳</b></strong>
                <strong style="color:red ;display: block;margin-bottom: 5px;">با انتخاب طرح ده‌بوم فرزند شما به سایت های زیر دسترسی نخواهند داشت:</strong>
                <strong style="color:#191970 ;display: block;margin-bottom: 5px;"><b>آپارات کودک / مایکت / کافه بازار/ ایتا / آپارات / اینستاگرام / گوگل / تپسی / زنبیل / اسنپ مارکت / دیجی کالا / ویکیپدیا</b></strong>
          </div>
        </html>`,
      },
      {
        code: '4',
        title: 'نوبوم',
        description: `<html dir="rtl" lang="fa" align="justify">
          <div style="direction: rtl;font-size: 14px;line-height: 20px;">
          <strong style="color:#C45911 ;display: block;margin-bottom: 5px;"><h3>نوبوم (مخصوص فرزندان 3 تا 7 سال)</h3></strong>
                  <strong style="color:#28af45 ;display: block;margin-bottom: 5px;">با انتخاب طرح نو بوم فرزند شما به سایت های زیر دسترسی خواهند داشت:</strong>
          <strong style="color:#191970 ;display: block;margin-bottom: 5px;"> <b>زیرساخت‌های آموزشی (مانند اسکای روم) / شاد / پویا تی وی / نهال تی وی / توپ مارکت / درسا بازار / ذره بین</b></strong>
                  <strong style="color:red ;display: block;margin-bottom: 5px;">با انتخاب طرح نوبوم فرزند شما به سایت های زیر دسترسی نخواهند داشت:</strong>
                  <strong style="color:#191970 ;display: block;margin-bottom: 5px;"><b>فیلیمو مدرسه / آپارات کودک / مایکت / کافه بازار / واتساپ / ایتا / آپارات / اینستاگرام / گوگل / نشان / ورزش ۳ / تپسی / زنبیل / اسنپ مارکت / دیجی کالا / ویکیپدیا</b></strong>
            </div>
        </html>`,
      },
    ],
  };


const data = {
  1: 'هزاربوم',
  2: 'صدبوم',
  3: 'ده بوم',
  4: 'نوبوم',
};

for (const key in data) {
    const description = baminoAdapters.packageItems.find((f) => f.code === key);

  console.log(description)
}