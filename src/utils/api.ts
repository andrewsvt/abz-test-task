export const getPositions = async () => {
  try {
    const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

export const getToken = async () => {
  try {
    const res = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};
