export const Treatments = [
    { key: 0, value:"Prefiro não informar"},
    { key: 1, value:"Doutor"},
    { key: 2, value:"Doutora"},
    { key: 3, value:"Enfermeiro"},
    { key: 4, value:"Enfermeira"},
    { key: 5, value:"Acadêmico"},
];

export const TreatmentsDic = {
    0:"Prefiro não informar",
    1:"Doutor",
    2:"Doutora",
    3:"Enfermeiro",
    4:"Enfermeira",
    5:"Acadêmico",
};

export const ShortTreatmentDic = {
    0:"Prefiro não informar",
    1:"Dr",
    2:"Dra",
    3:"Enfermeiro",
    4:"Enfermeira",
    5:"Acadêmico",  
}
export interface ITreatments {
    key: number;
    value: string;
}