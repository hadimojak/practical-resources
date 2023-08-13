const fs= require('fs')



const response  = JSON.parse(fs.readFileSync('./test.json',"utf-8"))

const {supplementaryOfferingList}=response.Envelope.Body.querySubscriberRspMsg.querySubscriberResponse.subscriberInfo

// const code= supplementaryOfferingList.map(val=>val.offeringBasic.offeringId).join()

const availableOffers = [];

if (!Array.isArray(supplementaryOfferingList)) {
  if (![1, 2].includes(supplementaryOfferingList.offeringBasic.status)) throw new customErrors.GeneralError();
  if ([1, 2].includes(supplementaryOfferingList.offeringBasic.status
     && new Date() > new Date(supplementaryOfferingList.offeringBasic.expDate))) throw new customErrors.GeneralError(0);
  if ([1, 2].includes(supplementaryOfferingList.offeringBasic.status)
      && new Date() < new Date(supplementaryOfferingList.offeringBasic.expDate)) availableOffers.push(supplementaryOfferingList.offeringBasic);
} else if (Array.isArray(supplementaryOfferingList)) {
  const filteredSubs = supplementaryOfferingList.filter((val) => [1, 2].includes(val.offeringBasic.status) && new Date(val.offeringBasic.expDate) > new Date());
  availableOffers.push(...filteredSubs);
}

availableOffers.map((val) => {
    if (val.offeringBasic.status === 1) val.status = 'RESERVED';
    else if (val.offeringBasic.status === 2) val.status = 'ACTIVE';
  });

  availableOffers.map((val) => {
    if ([val.offeringBasic.statusDetail === 7]) val.renewal = 'ACTIVE';
    else val.renewal = 'INACTIVE';
  });

  console.log(availableOffers)