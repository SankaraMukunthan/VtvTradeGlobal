import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  FileText, 
  Truck, 
  LineChart, 
  Package, 
  Shield, 
  Globe,
  FileSearch,
  Warehouse
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-merriweather font-bold text-primary mb-6">
              Our Import & Export Services
            </h1>
            <p className="text-lg text-foreground mb-0 max-w-3xl mx-auto">
              VTV Enterprises offers comprehensive global trade services to streamline your
              import and export operations with professional expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Global shipping and logistics" 
                className="w-full h-auto rounded-lg shadow-xl" 
              />
            </div>
            
            <div>
              <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8">
                Core Services
              </h2>
              <div className="space-y-8">
                {/* Service 1 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-md">
                      <FileText className="text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-merriweather font-bold text-primary mb-2">Documentation & Compliance</h3>
                    <p className="text-foreground">
                      We handle all necessary export/import documentation, ensuring compliance 
                      with international trade regulations and customs requirements.
                    </p>
                  </div>
                </div>
                
                {/* Service 2 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-md">
                      <Truck className="text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-merriweather font-bold text-primary mb-2">Logistics & Shipping</h3>
                    <p className="text-foreground">
                      Our comprehensive logistics solutions include transportation, freight forwarding, 
                      and efficient delivery to your destination.
                    </p>
                  </div>
                </div>
                
                {/* Service 3 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-md">
                      <LineChart className="text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-merriweather font-bold text-primary mb-2">Quality Assurance</h3>
                    <p className="text-foreground">
                      We implement rigorous quality control measures to ensure all products 
                      meet international standards and customer specifications.
                    </p>
                  </div>
                </div>
                
                {/* Service 4 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-md">
                      <Package className="text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-merriweather font-bold text-primary mb-2">Packaging Solutions</h3>
                    <p className="text-foreground">
                      Custom packaging solutions designed to protect product integrity 
                      during international transit and enhance brand presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Export Services */}
          <div className="mb-20">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Export Services
            </h2>
            <p className="text-foreground text-center max-w-3xl mx-auto mb-12">
              We offer specialized services to help businesses export premium Indian agricultural products 
              to international markets efficiently and compliantly.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-6">
                    <FileSearch className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-3 text-center">
                    Export Compliance
                  </h3>
                  <p className="text-foreground text-center">
                    We navigate complex export regulations, ensuring all documentation is complete and 
                    compliant with both Indian and destination country requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-6">
                    <Shield className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-3 text-center">
                    Quality Certification
                  </h3>
                  <p className="text-foreground text-center">
                    We obtain all necessary quality certifications for your products, ensuring they meet 
                    international standards and import requirements of destination countries.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-6">
                    <Globe className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-3 text-center">
                    Market Access
                  </h3>
                  <p className="text-foreground text-center">
                    Leverage our established network to access key international markets, including 
                    assistance with market research and identifying potential buyers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Import Services */}
          <div className="mb-20">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Import Services
            </h2>
            <p className="text-foreground text-center max-w-3xl mx-auto mb-12">
              We simplify the process of importing premium products into India, helping businesses 
              access high-quality international goods.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mx-auto mb-6">
                    <FileText className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-3 text-center">
                    Import Licensing
                  </h3>
                  <p className="text-foreground text-center">
                    We assist with obtaining all necessary import licenses and permits required 
                    by Indian regulatory authorities for seamless customs clearance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mx-auto mb-6">
                    <Truck className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-3 text-center">
                    Customs Clearance
                  </h3>
                  <p className="text-foreground text-center">
                    Our experienced team handles all aspects of customs clearance, ensuring 
                    efficient processing and compliance with import regulations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mx-auto mb-6">
                    <Warehouse className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-3 text-center">
                    Warehousing & Distribution
                  </h3>
                  <p className="text-foreground text-center">
                    We offer comprehensive warehousing and distribution services to ensure 
                    your imported goods reach their final destination efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Our Process
            </h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">Consultation</h3>
                <p className="text-foreground text-sm">Initial discussion to understand your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">Proposal</h3>
                <p className="text-foreground text-sm">Detailed service plan and quotation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">Documentation</h3>
                <p className="text-foreground text-sm">Preparing and processing all required paperwork</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">Execution</h3>
                <p className="text-foreground text-sm">Implementing the logistics and shipping plan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">5</div>
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">Delivery</h3>
                <p className="text-foreground text-sm">Ensuring on-time delivery and follow-up</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-merriweather font-bold text-white mb-4">
              Need assistance with your import or export requirements?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is ready to support your global trade needs. Contact us today to discuss how we can help streamline your operations.
            </p>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
