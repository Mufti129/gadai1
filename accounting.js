export function calculateSHU(totalSHU, config, member) {
  // Jasa Modal: Proporsi simpanan anggota terhadap total simpanan koperasi 
  const jma = (member.savings / config.totalCoopSavings) * (config.jmaRatio / 100) * totalSHU;
  
  // Jasa Usaha: Proporsi transaksi anggota terhadap total transaksi koperasi 
  const jua = (member.transactions / config.totalCoopTransactions) * (config.juaRatio / 100) * totalSHU;
  
  return {
    total: jma + jua,
    detail: { jma, jua }
  };
}