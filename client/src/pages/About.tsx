import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Award, Users, Globe, TrendingUp, ShieldCheck, FileText, Download, Building2, CreditCard } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8 pb-20">
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Who We Are */}
            <div>
              <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-foreground mb-6">
                Founded in 2013, VTV Enterprises began with a simple mission: to showcase the finest 
                agricultural products from India to the world. What started as a small export business 
                has grown into a trusted global trading company with operations spanning across continents.
              </p>
              <p className="text-foreground mb-8">
                Our commitment to quality, transparency, and customer satisfaction has helped us build lasting 
                relationships with clients in over 25 countries. We take pride in our role as ambassadors of 
                Indian agriculture while also bringing select premium products to the Indian market.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircle className="text-primary h-6 w-6 mr-2" />
                  <span className="text-foreground">Quality Focused</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary h-6 w-6 mr-2" />
                  <span className="text-foreground">Customer Centric</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary h-6 w-6 mr-2" />
                  <span className="text-foreground">Sustainable Practices</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-primary h-6 w-6 mr-2" />
                  <span className="text-foreground">Global Reach</span>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-8">
              <Card className="p-8 border-t-4 border-t-primary">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-primary h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-merriweather font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-foreground">
                  To connect quality-conscious global buyers with premium Indian agricultural products while 
                  facilitating access to select international goods for the Indian market, all while maintaining 
                  the highest standards of service, sustainability, and business ethics.
                </p>
              </Card>
              <Card className="p-8 border-t-4 border-t-secondary">
                <div className="flex items-center mb-4">
                  <Globe className="text-secondary h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-merriweather font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-foreground">
                  To be the most trusted partner in global agricultural trade, recognized for our unwavering 
                  commitment to quality, customer satisfaction, and sustainable business practices that benefit 
                  farmers, consumers, and communities alike.
                </p>
              </Card>
            </div>
          </div>

          {/* Leadership */}
          <div className="mb-16">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="/attached_assets/ceo.jpg" 
                    alt="Venu Gopal V" 
                    className="w-56 h-56 object-cover rounded-full mx-auto"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary rounded-full p-2">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-1">Venu Gopal V</h3>
                <p className="text-secondary font-semibold mb-3">Founder & CEO</p>
                <p className="text-foreground text-sm">
                  With over 15 years in international trade, Venu Gopal's vision and leadership have been instrumental 
                  in VTV's growth and success.
                </p>
              </div>
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="/attached_assets/arun_raj.jpg" 
                    alt="Arun Raj" 
                    className="w-56 h-56 object-cover rounded-full mx-auto"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary rounded-full p-2">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-1">Arun Raj</h3>
                <p className="text-secondary font-semibold mb-3">Manager</p>
                <p className="text-foreground text-sm">
                  Arun's expertise in logistics and supply chain management ensures smooth operations 
                  across our global network.
                </p>
              </div>
            </div>
          </div>

          {/* Business Information and Certifications */}
          <div className="mb-16">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Business Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column: Business Details */}
              <div>
                {/* GST Registration Info */}
                <div className="bg-gray-light p-8 rounded-lg border border-gray-300 mb-8">
                  <div className="flex items-start">
                    <FileText className="h-10 w-10 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-merriweather font-bold text-primary mb-2">GST Registration</h3>
                      <p className="text-foreground mb-4">Registered under Goods and Services Tax</p>
                      
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mb-2">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Business Name</p>
                          <p className="font-semibold">VTV Enterprises</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Registration Type</p>
                          <p className="font-semibold">Regular</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bank Account Details */}
                <div className="bg-gray-light p-8 rounded-lg border border-gray-300">
                  <div className="flex items-start mb-4">
                    <Building2 className="h-10 w-10 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-merriweather font-bold text-primary mb-2">Bank Account Details</h3>
                      <p className="text-foreground mb-4">For business transactions and payments</p>
                      
                      <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Account Holder Name</p>
                          <p className="font-semibold">VENU GOPAL R</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Account Number</p>
                          <p className="font-semibold">4196839713</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Bank Name</p>
                          <p className="font-semibold">Indian Bank</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">IFSC Code</p>
                          <p className="font-semibold">IDIB000M032</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Certifications */}
              <div>
                <div className="bg-gray-light p-8 rounded-lg border border-gray-300 h-full">
                  <h3 className="text-xl font-merriweather font-bold text-primary mb-6">Certifications & Standards</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h4 className="font-merriweather font-bold text-primary mb-1">ISO 9001:2015</h4>
                      <p className="text-foreground text-sm">Quality Management Systems</p>
                    </div>
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h4 className="font-merriweather font-bold text-primary mb-1">ISO 22000:2018</h4>
                      <p className="text-foreground text-sm">Food Safety Management</p>
                    </div>
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h4 className="font-merriweather font-bold text-primary mb-1">FSSAI</h4>
                      <p className="text-foreground text-sm">Food Safety and Standards Authority of India</p>
                    </div>
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h4 className="font-merriweather font-bold text-primary mb-1">APEDA</h4>
                      <p className="text-foreground text-sm">Agricultural & Processed Food Products Export Development Authority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-merriweather font-bold text-white mb-4">
              Ready to partner with us?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Discover the VTV Enterprises difference. Contact us today to discuss your import or export needs.
            </p>
            <Link href="/contact" className="inline-block bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-8 rounded-md transition duration-300">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
