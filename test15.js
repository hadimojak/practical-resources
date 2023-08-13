const PersianDate = require('persian-date');
const persianDate = new PersianDate();

// console.log(new Date().getHours() + ':' + new Date().getMinutes());

// console.log(persianDate.toLocale('en').format('YYYY/MM/DD'))

const obj = { name: 'hadi', age: 24 };

if (true) {
  const { name: firstName } = obj;
}

console.log(new PersianDate().toLocale('en').format('YY/MM/DD'));

const answers = [
  {
    id: '167d6b37-18ad-454d-bb02-373f06edd2f9',
    questionId: '3d892627-a7b5-4b63-831f-511d7efc3cc9',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answerId: '26a69246-5a1c-3e1b-2d48-7ab35585a62a',
    status: 'ACTIVE',
    createdts: '2022-05-31T11:53:19.251Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: '1b7b4a26-7b2a-4a7a-a269-eef2a6610380',
    questionId: '015c2bd5-7ca9-4462-90b3-bbf0e3c4df0a',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answerId: '26a69246-5a1c-3e1b-2d48-7ab35585a62a',
    status: 'ACTIVE',
    createdts: '2022-06-26T14:34:22.932Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: '32a0a347-27ee-45b2-808f-1f9c414ecca8',
    questionId: 'aa3ade02-6b02-4cec-940a-e734a33b23fd',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answer: 'Yes',
    status: 'ACTIVE',
    createdts: '2022-05-22T14:34:59.918Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: '5a6f0c7e-66e4-464c-b0a2-ac730478b190',
    questionId: 'aa3ade02-6b02-4cec-940a-e734a33b23fd',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answer: 'Yes',
    status: 'ACTIVE',
    createdts: '2022-05-22T14:17:29.042Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: '8498672b-6268-47b6-858a-97048880cafd',
    questionId: 'aa3ade02-6b02-4cec-940a-e734a33b23fd',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answer: 'Yes',
    status: 'ACTIVE',
    createdts: '2022-05-22T14:26:03.484Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: '8b36e7c1-6533-4822-b64a-c57d2b61aac6',
    questionId: 'e96150a1-5d6f-4662-8686-5cfcbdab3c94',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answerId: '26a69246-5a1c-3e1b-2d48-7ab35585a62a',
    status: 'ACTIVE',
    createdts: '2022-05-31T14:44:10.077Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: '9af71f73-fb0d-44a9-8ba1-98ae14d8cfa0',
    questionId: '3d892627-a7b5-4b63-831f-511d7efc3cc9',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answerId: '26a69246-5a1c-3e1b-2d48-7ab35585a62a',
    status: 'ACTIVE',
    createdts: '2022-05-31T12:44:05.582Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: 'b2d68492-5f60-439c-9fcd-8bbc43db833a',
    questionId: 'b9592d86-5827-4af3-aaec-b2ed83ac79a5',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answer: 'Yes',
    status: 'ACTIVE',
    createdts: '2022-05-22T11:50:45.066Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: 'ba0931a9-d55c-40e7-8c32-0b3b60f749ab',
    questionId: '3d892627-a7b5-4b63-831f-511d7efc3cc9',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answerId: 'ded67565-2291-4725-b80a-7047c4bf90ec',
    status: 'ACTIVE',
    createdts: '2022-05-31T11:53:19.251Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: 'ca5371e4-6a53-4584-8ecd-e5912a6a4f5f',
    questionId: 'ecaf19a5-5d34-4a0e-93a1-8e3af87e491f',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answer: 'Yes',
    status: 'ACTIVE',
    createdts: '2022-05-22T13:38:37.505Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: 'd597b79a-87b8-446c-b421-06d3155086fe',
    questionId: '8c3e01fc-3e4c-4017-a12d-33d61c75cd4d',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answerId: '26a69246-5a1c-3e1b-2d48-7ab35585a62a',
    status: 'ACTIVE',
    createdts: '2022-05-31T18:28:18.800Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
  {
    id: 'e7a0ec65-328c-4066-bdab-05ae42053c5b',
    questionId: 'e96150a1-5d6f-4662-8686-5cfcbdab3c94',
    userId: '257f1e35-2789-44dc-8c65-4389c36ae071',
    answerId: '26a69246-5a1c-3e1b-2d48-7ab35585a62a',
    status: 'ACTIVE',
    createdts: '2022-05-31T14:38:44.992Z',
    creator: '257f1e35-2789-44dc-8c65-4389c36ae071',
  },
];
