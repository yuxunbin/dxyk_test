export const companies = ["company1", "company2", "company3"];

export const status = [1, 2, 3];

export const users = ["zhangsan", "stan", "lisi", "wangwu"];

export const services = {
  fetchUsers: () => {
    return [
      {
        name: "zhangsan",
        companyId: "company1",
        status: 1
      },
      {
        name: "stan",
        companyId: "company3",
        status: 1
      },
      {
        name: "lisi",
        companyId: "company2",
        status: 2
      },
      {
        name: "wangwu",
        companyId: "company3",
        status: 3
      },
    ];
  },
  fetchCompanyById: (companyId) => {
    let company = null;
    companies.includes(companyId) && (company = companyId);
    return company;
  },
  fetchStatus: () => {
    return status[1];
  }
};
