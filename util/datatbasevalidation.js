function validateFmilydata(data) {
  if (typeof data !== 'object' || data !== null) {
    throw  new Error ('data must be an object')
  }

  const ecpectedKeys = ["name", "age", "email", "job"," salary", 'residence' ]

  const dataKeys = Object.keys(data)

  const misssingKeys = ecpectedKeys.filter((key) => !dataKeys.includes((key) => {
    
  })) 

  const { name, age, email, job, salary, residence  } = data

}