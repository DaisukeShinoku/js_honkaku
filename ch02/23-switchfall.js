let rank = 'D';

switch(rank) {
  case 'A':
  case 'B':
  case 'C':
    console.log('合格です');
    break;
  case 'D':
  default:
    console.log('不合格です');
    break;
}