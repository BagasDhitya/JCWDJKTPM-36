import { data } from './data/packages.json'

interface Package {
    waybill: string,
    packageName: string,
    packageType: string,
    originCity: string,
    destinationCity: string,
    deliveryStatus: string,
    lastUpdated?: Date,
    courier?: string,
}

class PackageManagement {
    private packages: Package[] = data

    public viewAllPackages(): Package[] {
        return this.packages
    }

    public assignCourier(waybill: string, courier: string, role: 'admin' | 'guest') {
        if (role !== 'admin') {
            return 'Only admin can assign courier'
        }

        const pkg = this.packages.find((pkg: Package) => pkg.waybill === waybill)
        if (!pkg) {
            return "Package not found"
        }

        pkg.courier = courier
        return 'Courier assigned successfully'
    }

    public async trackPackage(waybill: string) {

        const pkg = this.packages.find((pkg: Package) => pkg.waybill === waybill)
        if (!pkg) {
            return "Package not found"
        }

        const now = new Date()

        if (pkg.lastUpdated === undefined) {
            return "lastupdated not defined"
        }

        const diffInDays = (now.getTime() - pkg.lastUpdated?.getTime()) / (1000 * 60 * 60 * 24)
        if (diffInDays > 3) {
            await this.contactCustomerService(pkg)
        }
    }

    private async contactCustomerService(pkg: Package): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Customer service contacted for delayed package : ' + pkg.waybill)
            }, 2000)
        })
    }
}

const packageManagement = new PackageManagement();

(async () => {

})()