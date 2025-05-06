import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Award, Users, Globe, TrendingUp, ShieldCheck, FileText, Download } from "lucide-react";

const About = () => {
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
              Our Story
            </h1>
            <p className="text-lg text-foreground mb-0 max-w-3xl mx-auto">
              Learn about VTV Enterprises' journey to becoming a leading global agricultural trade partner.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-foreground mb-6">
                Founded in 2013, VTV Enterprises began with a simple mission: to showcase the finest 
                agricultural products from India to the world. What started as a small export business 
                has grown into a trusted global trading company with operations spanning across continents.
              </p>
              <p className="text-foreground mb-6">
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="VTV Enterprises Office" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

          {/* Leadership */}
          <div className="mb-16">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Vikram Tanwar" 
                    className="w-56 h-56 object-cover rounded-full mx-auto"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary rounded-full p-2">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-1">Vikram Tanwar</h3>
                <p className="text-secondary font-semibold mb-3">Founder & CEO</p>
                <p className="text-foreground text-sm">
                  With over 15 years in international trade, Vikram's vision and leadership have been instrumental 
                  in VTV's growth and success.
                </p>
              </div>
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Priya Sharma" 
                    className="w-56 h-56 object-cover rounded-full mx-auto"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary rounded-full p-2">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-1">Priya Sharma</h3>
                <p className="text-secondary font-semibold mb-3">Director of Operations</p>
                <p className="text-foreground text-sm">
                  Priya's expertise in logistics and supply chain management ensures smooth operations 
                  across our global network.
                </p>
              </div>
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Rajiv Patel" 
                    className="w-56 h-56 object-cover rounded-full mx-auto"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary rounded-full p-2">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-merriweather font-bold text-primary mb-1">Rajiv Patel</h3>
                <p className="text-secondary font-semibold mb-3">Quality Assurance Director</p>
                <p className="text-foreground text-sm">
                  Rajiv's dedication to maintaining the highest quality standards has earned VTV its reputation 
                  for excellence in product quality.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Certifications & Standards
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-light p-6 rounded-lg text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">ISO 9001:2015</h3>
                <p className="text-foreground text-sm">Quality Management Systems</p>
              </div>
              <div className="bg-gray-light p-6 rounded-lg text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">ISO 22000:2018</h3>
                <p className="text-foreground text-sm">Food Safety Management</p>
              </div>
              <div className="bg-gray-light p-6 rounded-lg text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">FSSAI</h3>
                <p className="text-foreground text-sm">Food Safety and Standards Authority of India</p>
              </div>
              <div className="bg-gray-light p-6 rounded-lg text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-merriweather font-bold text-primary mb-2">APEDA</h3>
                <p className="text-foreground text-sm">Agricultural & Processed Food Products Export Development Authority</p>
              </div>
            </div>
          </div>
          
          {/* GST Certificate */}
          <div className="mb-16">
            <h2 className="section-title text-3xl font-merriweather font-bold text-primary mb-8 text-center">
              Business Documents
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-light p-8 rounded-lg border border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-10 w-10 text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-merriweather font-bold text-primary">GST Certificate</h3>
                      <p className="text-foreground">Goods and Services Tax Registration</p>
                    </div>
                  </div>
                  <a 
                    href="/assets/certificates/gst_certificate.pdf" 
                    download
                    className="flex items-center bg-secondary hover:bg-secondary-light text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
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
