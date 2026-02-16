import { MenuSectionType } from './types';

export const menuData: MenuSectionType[] = [
  {
    id: 'chaat',
    titleHindi: 'चाट का चटखारा',
    titleEnglish: 'Chatpati Chaat',
    items: [
      {
        id: 'c1',
        nameHindi: 'पानी पूरी',
        nameEnglish: 'Pani Puri (Gol Gappa)',
        description: 'Crispy hollow balls filled with spicy tamarind water and potatoes.',
        price: 50,
        isVeg: true,
        spicyLevel: 3,
        imageUrl: '/images/Pani Puri.jpg'
      },
      {
        id: 'c2',
        nameHindi: 'आलू टिक्की',
        nameEnglish: 'Aloo Tikki Chaat',
        description: 'Spiced potato patties served with yogurt, mint chutney, and tamarind sauce.',
        price: 80,
        isVeg: true,
        spicyLevel: 2,
        imageUrl: '/images/Aaloo Tikki.jpg'
      },
      {
        id: 'c3',
        nameHindi: 'पापड़ी चाट',
        nameEnglish: 'Papdi Chaat',
        description: 'Crispy dough wafers mixed with chickpeas, potatoes, and tangy chutneys.',
        price: 70,
        isVeg: true,
        spicyLevel: 1,
        imageUrl: '/images/papdi-chaat.jpg'
      },
      {
        id: 'c4',
        nameHindi: 'दही पूरी',
        nameEnglish: 'Dahi Puri',
        description: 'Crispy shells stuffed with potato and covered in sweet yogurt and sev.',
        price: 90,
        isVeg: true,
        spicyLevel: 1,
        imageUrl: '/images/Dahi Puri.jpg'
      }
    ]
  },
  {
    id: 'main',
    titleHindi: 'पेट पूजा',
    titleEnglish: 'Main Course',
    items: [
      {
        id: 'm1',
        nameHindi: 'छोले भटूरे',
        nameEnglish: 'Chole Bhature',
        description: 'Spicy chickpeas served with large fried leavened bread.',
        price: 150,
        isVeg: true,
        spicyLevel: 2,
        imageUrl: '/images/Chole Bhature.jpg',
      },
      {
        id: 'm2',
        nameHindi: 'मक्के की रोटी सरसों का साग',
        nameEnglish: 'Sarson Ka Saag',
        description: 'Traditional mustard greens curry served with corn flatbread.',
        price: 180,
        isVeg: true,
        spicyLevel: 1,
        imageUrl: '/images/Sarso ka Saag.jpg'
      },
      {
        id: 'm3',
        nameHindi: 'पनीर बटर मसाला',
        nameEnglish: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in a rich, creamy tomato gravy.',
        price: 220,
        isVeg: true,
        spicyLevel: 1,
        imageUrl: '/images/Paneer Butter Masala.jpg'
      },
      {
        id: 'm4',
        nameHindi: 'अमृतसरी कुलचा',
        nameEnglish: 'Amritsari Kulcha',
        description: 'Stuffed flatbread baked in a clay oven, served with chole.',
        price: 120,
        isVeg: true,
        spicyLevel: 2,
        imageUrl: '/images/Amritsari-Kulcha.jpg'
      }
    ]
  },
  {
    id: 'sweets',
    titleHindi: 'मीठा हो जाए',
    titleEnglish: 'Sweet Tooth',
    items: [
      {
        id: 's1',
        nameHindi: 'गरमा गरम जलेबी',
        nameEnglish: 'Jalebi',
        description: 'Spiral shaped crispy fried batter soaked in saffron sugar syrup.',
        price: 60,
        isVeg: true,
        spicyLevel: 1,
        imageUrl: '/images/Jalebi.jpg'
      },
      {
        id: 's2',
        nameHindi: 'ठंडी लस्सी',
        nameEnglish: 'Punjabi Lassi',
        description: 'Thick, creamy yogurt drink served in a large clay glass.',
        price: 80,
        isVeg: true,
        spicyLevel: 1,
        imageUrl: '/images/Lassi.jpg'
      },
      {
        id: 's3',
        nameHindi: 'गुलाब जामुन',
        nameEnglish: 'Gulab Jamun',
        description: 'Soft milk solids balls soaked in rose-flavored sugar syrup.',
        price: 70,
        isVeg: true,
        spicyLevel: 1,
        imageUrl: '/images/Gulab Jamun.jpg'
      }
    ]
  }
];