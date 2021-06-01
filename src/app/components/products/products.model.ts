export default class Product{
  id?: string;
  closingPrice?: number;
  dateClosingPrice?: string;
  dateTheoreticalPrice?: string;
  keyFactor?:{
    badge?: string;
    assets?: number;
    average?: number;
    commissions?: number;
    distribution?: number;
    duration?: number;
    rate?: number;
    weightedAverage?: number;
  }
;
  name?: string;
  objective?: string;
  performance?: {
    annualPercentage?: number;
    atFive?: number;
    atThree?: number;
    year?: number;
  };
  theoreticalPrice?: number;
  thicker?: string;
  yieldDate?: string;
}
