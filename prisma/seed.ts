import { PrismaClient } from "@prisma/client";
import { connect } from "http2";
import september from "./september";
import november from "./november";
import bcrypt, { compare } from "bcrypt";
import specialties from "./specialties";

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
});

const encryptedPassword =
    "$2b$10$xzJvZ6iKLWTL.WlqN3BFY.njYh1wd12kZjk4Ckm/fDr/cjvwOHnrC"; // teste123 SALT 10


const main = async () => {

    await prisma.shift.updateMany({
        data: {
            isActive: false,
        },
        where: {
            medicalGroupGuid: '98406c2d-d4d8-4b75-9902-5c9db4be1395',
            shiftDefinition: {
                isActive: false
            }
        }
    })
    /*await prisma.speciality.createMany({
        data: specialties.map((specialty) => {
            return {
                title: specialty
            }
        })
    })*/
    /*const superAdmin = await prisma.admin.create({
        data: {
            name: 'Super Admin',
            email: 'admin@agendoctor.com',
            encryptedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            isSuperAdmin: true
        }
    })

    const hospital = await prisma.hospital.create({
        data: {
            name: "Hospital Beatriz Ramos",
            latitude: "0",
            longitude: "0",
            plan: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
        }
    })

    const hospitalAdmin = await prisma.admin.create({
        data: {
            name: 'HBR Admin',
            email: 'admin@hbeatrizramos.com',
            hospitalGuid: hospital.guid,
            encryptedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            isSuperAdmin: false
        }
    })

    const specialty = await prisma.speciality.create({
        data: {
            title: 'Médico Geral'
        }
    });
    const managerPassword = await bcrypt.hash('augusto@hbr', 10);

    const manager = await prisma.user.create({
        data: {
            name: "Augusto",
            email: "augusto@hbeatrizramos.com",
            specialities: { connect: { guid: specialty.guid } },
            encryptedPassword: managerPassword,
            isActive: true,
            treatment: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    });

    const medicalGroup = await prisma.medicalGroup.create({
        data: {
            name: 'Pronto Socorro',
            createdAt: new Date(),
            updatedAt: new Date(),
            hospital: { connect: { guid: hospital.guid } },
            managers: { connect: { guid: manager.guid } },
            isActive: true,
        }
    });

    
    const shiftDefinition1 = await prisma.shiftDefinition.create({
        data:
        {
            start: '07',
            end: '13',
            icon: 1,
            medicalGroupGuid: medicalGroup.guid,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            numberOfShifts: 2,
            value: 1600,
            name: 'teste',
        }
    });

    const shiftDefinition2 = await prisma.shiftDefinition.create({
        data:
        {
            start: '13',
            end: '19',
            icon: 2,
            medicalGroupGuid: medicalGroup.guid,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            numberOfShifts: 3,
            value: 1600,
            name: 'teste',
        }
    });

    const shiftDefinition3 = await prisma.shiftDefinition.create({
        data:
        {
            start: '19',
            end: '07',
            icon: 3,
            medicalGroupGuid: medicalGroup.guid,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true,
            numberOfShifts: 2,
            value: 1600,
            name: 'teste',
        }
    });

    [...september, ...november].forEach(async (professional) => {
        const password = await bcrypt.hash((professional.email.slice(0, -18) + "@hbr"), 10);

        const user = await prisma.user.upsert({
            where: {
                email: professional.email,
            },
            update: {},
            create: {
                name: professional.name,
                email: professional.email,
                encryptedPassword: password,
                isActive: true,
                treatment: professional.treatment,
                specialities: { connect: { guid: specialty.guid } },
                medicalGroup: { connect: { guid: medicalGroup.guid } },
                createdAt: new Date(),
                updatedAt: new Date(),

            }
        });

        professional.shifts.forEach(async (shift) => {
            const startDate = new Date(shift.startDate);
            const endDate = new Date(shift.endDate);
            let shiftDefinitionGuid;
            switch (shift.shiftDefinition) {
                case 1:
                    shiftDefinitionGuid = shiftDefinition1.guid;
                    break;
                case 2:
                    shiftDefinitionGuid = shiftDefinition2.guid;
                    break;
                case 3:
                    shiftDefinitionGuid = shiftDefinition3.guid;
                    break;
            }

            //startDate.setHours(startDate.getHours() - 3)
            //endDate.setHours(endDate.getHours() - 3)
            await prisma.shift.create({
                data: {
                    responsibleUser: { connect: { guid: user.guid } },
                    medicalGroup: { connect: { guid: medicalGroup.guid } },
                    shiftDefinition: { connect: { guid: shiftDefinitionGuid } },
                    category: "Pronto Socorro",
                    description: "Pronto Socorro",
                    startDate: startDate,
                    endDate: endDate,
                    value: 100,
                    isActive: true,
                    createdAt: new Date,
                    updatedAt: new Date(),
                }
            })
        })
    })*/
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
