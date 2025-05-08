import { products, type Product, type InsertProduct, users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private users: Map<number, User>;
  private productCurrentId: number;
  private userCurrentId: number;

  constructor() {
    this.products = new Map();
    this.users = new Map();
    this.productCurrentId = 1;
    this.userCurrentId = 1;
    
    // Initialize with the products we need
    this.initializeProducts();
  }

  private initializeProducts() {
    const productsData: InsertProduct[] = [
      {
        name: "Somatropin",
        description: "Advanced growth hormone peptide for clinical research applications. High purity guaranteed with verified molecular structure. Used in various laboratory settings for cellular growth studies and protein synthesis research. Each batch undergoes rigorous quality control testing to ensure consistency and reliability in experimental outcomes.",
        shortDescription: "Advanced growth hormone peptide for clinical research applications. High purity guaranteed.",
        imageUrl: "https://images.unsplash.com/photo-1579154392429-0e6b4e450b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Peptides",
        inStock: true
      },
      {
        name: "HUGE",
        description: "Premium compound for advanced laboratory research. Exceptional stability and research results observed in controlled experimental conditions. Features improved solubility characteristics and extended shelf life when stored according to specifications. Ideal for comparative studies and longitudinal research projects requiring consistent sample properties.",
        shortDescription: "Premium compound for advanced laboratory research. Exceptional stability and research results.",
        imageUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Research Compounds",
        inStock: true
      },
      {
        name: "HGH Frag",
        description: "Specialized peptide fragment for precise laboratory testing and research protocols. This fragment isolates specific functional properties for targeted research applications. Enables researchers to study particular aspects of growth hormone activity without the full spectrum of effects, allowing for more precise experimental design and clearer research outcomes.",
        shortDescription: "Specialized peptide fragment for precise laboratory testing and research protocols.",
        imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Peptides",
        inStock: true
      },
      {
        name: "Biotin Complex",
        description: "High-grade biotin formulation for cellular research and experimental applications. This complex provides a stable biotin source for biotechnology research and development. Formulated to maintain maximum potency throughout your research process with enhanced solubility profiles for various experimental conditions.",
        shortDescription: "High-grade biotin formulation for cellular research and experimental applications.",
        imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Research Compounds",
        inStock: true
      },
      {
        name: "Research Grade Peptide",
        description: "Ultra-pure peptide compound engineered for precision research applications. Each batch is verified through mass spectrometry to confirm exact molecular weight and composition. Suitable for a wide range of biotechnology applications requiring consistent and reliable peptide samples with documented purity profiles.",
        shortDescription: "Ultra-pure peptide compound engineered for precision research applications.",
        imageUrl: "https://pixabay.com/get/g057fa9e0a2cb4f668eb689617808441b6dd049d164ab5eb8844ce608434ae63c76210d4e651baca90a226b50f3b4e1e663d274a0f42cfc66b6a50ddb77f24835_1280.jpg",
        category: "Peptides",
        inStock: true
      },
      {
        name: "Laboratory Standard Solution",
        description: "Calibration and reference standard for sensitive laboratory equipment and testing. Manufactured to exacting specifications for analytical laboratories requiring reliable calibration materials. Includes certificate of analysis documenting traceability to recognized international standards and detailed specifications.",
        shortDescription: "Calibration and reference standard for sensitive laboratory equipment and testing.",
        imageUrl: "https://pixabay.com/get/gcbbfaaa219a00f00131e4e0f195f9bab5e137532b5e9c116d511581dcadf85c74f5a772137c6dfcc3d88e8e6e1233d255c4c3739e0cd2dca41b563f482dc9262_1280.jpg",
        category: "Laboratory Standards",
        inStock: true
      },
      {
        name: "Analytical Grade Reagent",
        description: "Highly purified reagent specifically designed for analytical procedures requiring maximum accuracy. Manufactured in controlled environments to ensure consistent quality and reliability in research settings. Each lot is tested and certified to meet or exceed industry standards for analytical grade reagents.",
        shortDescription: "Highly purified reagent specifically designed for analytical procedures requiring maximum accuracy.",
        imageUrl: "https://pixabay.com/get/gcb2285a3f0dc3cb40db96183a739bac941184f6e4dee07a04c635483ca071ea52c646ecadbabf1907a5c46399ececd8c371976282d5c7e03a10951ef75902673_1280.png",
        category: "Reagents",
        inStock: true
      },
      {
        name: "Research Peptide Kit",
        description: "Comprehensive peptide research kit containing all necessary components for experimental protocols. Designed for research facilities conducting peptide synthesis, analysis, and application studies. Each kit includes detailed documentation of component specifications and recommended experimental procedures.",
        shortDescription: "Comprehensive peptide research kit containing all necessary components for experimental protocols.",
        imageUrl: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Research Kits",
        inStock: false
      },
      {
        name: "Molecular Biology Standard",
        description: "Reference standard for molecular biology applications including PCR, gene expression, and protein analysis. Produced under stringent quality control measures to ensure batch-to-batch consistency. Includes documentation of production methods and quality assurance testing results.",
        shortDescription: "Reference standard for molecular biology applications including PCR, gene expression, and protein analysis.",
        imageUrl: "https://pixabay.com/get/g6d0d486b4eca691470e97c934608d4006a331e32fbd96f876514a1464f9eb0ec3ab3826218c2e3f36537016967c7f7bf9d6a55de166ad4d7a2e95bf72c0bb920_1280.jpg",
        category: "Laboratory Standards",
        inStock: true
      },
      {
        name: "Advanced Research Compound",
        description: "Novel compound formulated for cutting-edge research applications in biochemistry and molecular biology. Features enhanced stability under laboratory conditions and improved compatibility with standard research protocols. Documented through extensive analytical testing to confirm structure and purity specifications.",
        shortDescription: "Novel compound formulated for cutting-edge research applications in biochemistry and molecular biology.",
        imageUrl: "https://pixabay.com/get/g3f25c3c56a269a452eb20dc30a8e38803f556ff38cee6e5c350b7a672c6075815a2e3f64b24669a2d37dc1994e971a82177aae56424daf1673dc3bb1723206d2_1280.png",
        category: "Research Compounds",
        inStock: true
      },
      {
        name: "Laboratory Calibration Kit",
        description: "Complete calibration kit for laboratory equipment including spectrophotometers, chromatography systems, and analytical balances. Developed to meet regulatory requirements for laboratory equipment validation and verification. Includes detailed documentation and procedures for calibration record-keeping.",
        shortDescription: "Complete calibration kit for laboratory equipment including spectrophotometers, chromatography systems, and analytical balances.",
        imageUrl: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Laboratory Equipment",
        inStock: true
      },
      {
        name: "Protein Analysis Standard",
        description: "High-purity protein standard for analytical procedures including electrophoresis, chromatography, and mass spectrometry. Manufactured to provide consistent molecular weight markers and concentration references for protein research. Each lot is extensively tested for consistent performance across analytical platforms.",
        shortDescription: "High-purity protein standard for analytical procedures including electrophoresis, chromatography, and mass spectrometry.",
        imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Research Standards",
        inStock: true
      },
      {
        name: "Cell Culture Media Supplement",
        description: "Specialized supplement for enhancing cell culture growth, viability, and productivity in research applications. Formulated to provide essential growth factors and nutrients for optimized cell culture performance. Rigorously tested to ensure sterility and consistent performance in standard cell culture systems.",
        shortDescription: "Specialized supplement for enhancing cell culture growth, viability, and productivity in research applications.",
        imageUrl: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Cell Culture",
        inStock: true
      },
      {
        name: "Pharmaceutical Grade Compound",
        description: "Ultra-pure compound meeting pharmaceutical grade specifications for advanced research applications. Manufactured in compliance with GMP guidelines to ensure maximum purity and consistency between production batches. Includes comprehensive documentation of manufacturing processes and quality control testing.",
        shortDescription: "Ultra-pure compound meeting pharmaceutical grade specifications for advanced research applications.",
        imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Pharmaceutical Compounds",
        inStock: true
      },
      {
        name: "Research Enzyme Complex",
        description: "Highly active enzyme complex for specialized research applications in molecular biology and biochemistry. Optimized for consistent catalytic activity and stability under standard laboratory conditions. Each lot is activity-tested and provided with detailed specifications of enzymatic performance parameters.",
        shortDescription: "Highly active enzyme complex for specialized research applications in molecular biology and biochemistry.",
        imageUrl: "https://images.unsplash.com/photo-1532634751-8df837c15371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Enzymes",
        inStock: false
      },
      {
        name: "Laboratory Analysis Kit",
        description: "Comprehensive analysis kit for specialized laboratory testing procedures in biochemistry and molecular biology. Contains all reagents and standards required for complete analytical workflows with detailed protocols included. Designed for reproducible results across different laboratory environments and operator skill levels.",
        shortDescription: "Comprehensive analysis kit for specialized laboratory testing procedures in biochemistry and molecular biology.",
        imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Analysis Kits",
        inStock: true
      },
      {
        name: "Chromatography Standard",
        description: "Precision standard for calibration and validation of chromatography systems including HPLC, GC, and TLC. Formulated to provide consistent retention time references and response factors for analytical method development. Includes detailed chromatographic profiles under standardized conditions for system suitability verification.",
        shortDescription: "Precision standard for calibration and validation of chromatography systems including HPLC, GC, and TLC.",
        imageUrl: "https://images.unsplash.com/photo-1582560475093-ba66accbc095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Chromatography",
        inStock: true
      },
      {
        name: "Research Antibody Conjugate",
        description: "Specialized antibody conjugate for immunological research applications including flow cytometry and immunohistochemistry. Developed to provide consistent binding specificity and signal intensity for target antigens. Each lot is tested for specificity, titer, and performance in relevant immunological assay systems.",
        shortDescription: "Specialized antibody conjugate for immunological research applications including flow cytometry and immunohistochemistry.",
        imageUrl: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Immunology",
        inStock: true
      },
      {
        name: "Laboratory Reference Material",
        description: "Certified reference material for analytical method validation and quality control in research laboratories. Produced under ISO-certified processes to ensure traceability and consistency for analytical testing. Includes detailed certificate of analysis with documented traceability to international reference standards.",
        shortDescription: "Certified reference material for analytical method validation and quality control in research laboratories.",
        imageUrl: "https://images.unsplash.com/photo-1559941727-6fb446e7e8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Reference Materials",
        inStock: true
      },
      {
        name: "Research PCR Kit",
        description: "Complete polymerase chain reaction kit optimized for research applications requiring high sensitivity and specificity. Contains all necessary components including specialized polymerase, optimized buffers, and control templates. Performance-tested to ensure consistent amplification across a wide range of template types and concentrations.",
        shortDescription: "Complete polymerase chain reaction kit optimized for research applications requiring high sensitivity and specificity.",
        imageUrl: "https://pixabay.com/get/gef191e5c3932524ea288de807e0968a99d9141b4b082a65c3d285bc35c019f0732fadad2f7c1667882063474a31e1e576adcb3372d856e63237f53de986c01cc_1280.jpg",
        category: "PCR",
        inStock: true
      }
    ];
    
    // Add all products to storage
    productsData.forEach(product => {
      this.createProduct(product);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productCurrentId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
