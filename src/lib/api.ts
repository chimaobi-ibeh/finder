export const searchProperties = async (filters: {
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    type?: 'land' | 'house' | 'hostel';
  }) => {
    const params = new URLSearchParams(filters as any).toString();
    const response = await fetch(`/api/listings?${params}`);
    if (!response.ok) throw new Error('Failed to fetch listings');
    return await response.json();
  };