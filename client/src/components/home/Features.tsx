import { Award, Globe, Handshake } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Award className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-merriweather font-bold mb-4">Premium Quality</h3>
            <p className="text-foreground">
              We source and deliver only the highest quality agricultural products 
              meeting international standards and certifications.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Globe className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-merriweather font-bold mb-4">Global Reach</h3>
            <p className="text-foreground">
              Our extensive network and logistics expertise enable us to serve clients 
              across major international markets efficiently.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <Handshake className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-merriweather font-bold mb-4">Trusted Partner</h3>
            <p className="text-foreground">
              With years of experience, we've built a reputation for reliability, 
              transparency, and excellence in global trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
