import { supabase } from './supabase';

export async function getCurrentProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single();
  if (error) throw error;
  return data;
}

export async function listBusinesses() {
  const { data, error } = await supabase.from('businesses').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function listLeads() {
  const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function listFinanceEntries() {
  const { data, error } = await supabase.from('finance_entries').select('*').order('occurred_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function createBusiness(input: { name: string; niche?: string; phone?: string; whatsapp?: string }) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Sign in required');
  const { data, error } = await supabase.from('businesses').insert({ ...input, owner_id: user.id }).select().single();
  if (error) throw error;
  return data;
}
