const PersianDate = require("persian-date");

const date = "1398/06/26";

console.log(new PersianDate(date.split('/').map(val=>+val)).toCalendar('gregorian').toLocale('en').format('L').replaceAll('/','-'))

const flag = false;

const result = `
      <requestHeader>
         <crm:version>1</crm:version>
         <crm:businessCode>ChangeAccountBillMedium</crm:businessCode>
         <crm:messageSeq>{ESB trandsactionId}</crm:messageSeq>
         <crm:ownershipInfo>
            <crm:beId>10101</crm:beId>
            <crm:regionId>10101</crm:regionId>
         </crm:ownershipInfo>${
           flag
             ? `<crm:accessSecurity>
            <crm:loginSystemCode>{mciChannelId}</crm:loginSystemCode>
            <crm:password>*****</crm:password>
         </crm:accessSecurity>
         <crm:operatorInfo>
            <crm:operatorId>{mciChannelId}</crm:operatorId>
         </crm:operatorInfo>`
             : ``
         }
      </requestHeader>`;

// console.log(result);

const arr = [
  {
    contactPersonId: "12345678",
    addressId: "12345678",
    contactPersonType: "A",
    // email: "string",
    title: "1",
  },
];

// if (!arr.find((val) => val.email)) console.log("nisst");
