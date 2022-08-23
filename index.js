export const stripPrivateProperties = (properties, objects) => {
  objects.forEach((o) => properties.forEach((property) => delete o[property]));
  return objects;
};

export const excludeByProperty = (property, objects) => {
  return objects.filter((o) => !o.hasOwnProperty(property));
};

export const sumDeep = (source) => {
  const clonedSource = JSON.parse(JSON.stringify(source));
  clonedSource.forEach((o) => {
    const sum = o.objects.reduce((prev, cur) => cur.val + prev, 0);
    o.objects = sum;
  });
  return clonedSource;
};

export const applyStatusColor = (rule, sources) => {
  let ruleMap = new Map();
  Object.keys(rule).forEach((color) => {
    const statusArr = rule[color];
    statusArr.forEach((status) => {
      ruleMap.set(status, color);
    });
  });

  const DefaultColor = "DefaultColor";
  const result = sources
    .map((o) => {
      o.color = ruleMap.get(o.status) || DefaultColor;
      return o;
    })
    .filter((o) => o.color !== DefaultColor);
  return result;
};

export const createGreeting = (greetTemplateFunc, greeting) => {
  return (name) => greetTemplateFunc(greeting, name);
};

export const setDefaults = () => {
  return (obj) => Object.assign({ subscribed: true }, obj);
};

export const fetchUserByNameAndUsersCompany = (name, services) => {
  async function fetchUserAndCompany() {
    const users = await services.fetchUsers();
    const user = users.find((user) => user.name === name);
    const company = await services.fetchCompanyById(user.companyId);
    return { user, company };
  }

  return new Promise((resolve) => {
    return Promise.all([fetchUserAndCompany(), services.fetchStatus()]).then(
      (values) => {
        resolve({
          user: values[0].user.name,
          company: values[0].company,
          status: values[1],
        });
      }
    );
  });
};