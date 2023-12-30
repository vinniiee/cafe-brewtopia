export const updateStatus= (order)=>{
    let status="confirming";
    if (Date.now() - new Date(order?.created_at) > 1000 * 15) {
        status = "preparing";
      }
      if ((new Date(order?.eta) - Date.now()) / 60000 < 15) {
        status = "delivering";
      }
      if (new Date(order?.eta) <= Date.now()) {
        status = "delivered";
      }
      return status;
}