const subscriberInfo = [
  {
    subInfo: {
      subsId: 7910022015897029,
      ownerPartyRoleType: "C",
      ownerPartyRoleId: 7910012041282351,
      subsWrittenLang: "Persian",
      subsVocieLang: 4,
      offeringId: 102,
      brand: 2,
      primaryIdentity: 9120284787,
      networkType: 1,
      defaultAcctId: 7910032015897029,
      paymentType: 1,
      imsi: 432113917256775,
      iccid: "8998113900017256775",
      subType: 1,
      effDate: "2015-05-14T09:59:00",
      expDate: "2037-01-01T00:00:00",
      activeDate: "2015-05-14T09:59:00",
      status: 2,
      statusTime: "2017-06-06T00:00:01",
      statusDetail: 0,
      salesChannelType: 601,
      salesChannelId: 10101,
      beId: 10101,
    },
  },
  {
    subInfo: {
      subsId: 7910022011674106,
      ownerPartyRoleType: "C",
      ownerPartyRoleId: 7910012041282351,
      subsWrittenLang: "Persian",
      subsVocieLang: 4,
      offeringId: 100,
      brand: 2,
      primaryIdentity: 9126580705,
      networkType: 1,
      defaultAcctId: 7910032011674106,
      paymentType: 1,
      imsi: 432113903964092,
      iccid: "8998113900003964092",
      subType: 1,
      effDate: "2005-12-27T22:23:00",
      expDate: "2037-01-01T00:00:00",
      activeDate: "2005-12-27T22:23:00",
      status: 2,
      statusTime: "2021-08-08T17:14:53",
      statusDetail: 0,
      salesChannelType: 601,
      salesChannelId: 10101,
      beId: 10101,
    },
  },
  {
    subInfo: {
      subsId: 7910022011674106,
      ownerPartyRoleType: "C",
      ownerPartyRoleId: 7910012041282351,
      subsWrittenLang: "Persian",
      subsVocieLang: 4,
      offeringId: 100,
      brand: 2,
      primaryIdentity: 9126580705,
      networkType: 1,
      defaultAcctId: 7910032011674106,
      paymentType: 1,
      imsi: 432113903964092,
      iccid: "8998113900003964092",
      subType: 1,
      effDate: "2005-12-27T22:23:00",
      expDate: "2037-01-01T00:00:00",
      activeDate: "2005-12-27T22:23:00",
      status: 9,
      statusTime: "2021-08-08T17:14:53",
      statusDetail: 0,
      salesChannelType: 601,
      salesChannelId: 10101,
      beId: 10101,
    },
  },
];

const acl = subscriberInfo.reduce((result, val) => {
  if (
    val.subInfo.status !== 9 &&
    new Date(val.subInfo.effDate) < new Date() < new Date(val.subInfo.expDate)
  ) {
    const item = {
      msisdn: val.subInfo.primaryIdentity,
      simType: val.subInfo.paymentType,
    };
    result.push(item);
    return result;
  } else return result;
}, []);

console.log(acl);




({ firstName, lastName, gender, birthday, individualProperty } = queryCustomerInfoRspMsg.queryCustomerInfoResponse.customer.individualInfo.individualBaseInfo);
      ({ value: fatherName } = individualProperty.find((val) => val.code === 'fatherName'));
      ({ value: birthIDCardNumber } = individualProperty.find((val) => val.code === 'birthIDCardNumber'));
      ({ usAddr } = queryCustomerInfoRspMsg.queryCustomerInfoResponse.customer.addressInfo.addressInfo);
      ({ postalCode } = queryCustomerInfoRspMsg.queryCustomerInfoResponse.customer.addressInfo.addressInfo);
      ({ idNumber } = queryCustomerInfoRspMsg.queryCustomerInfoResponse.customer.individualInfo.certificationInfo.idType === "NationalID" ? queryCustomerInfoRspMsg.queryCustomerInfoResponse.customer.individualInfo.certificationInfo : undefined);