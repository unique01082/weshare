import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  OrderByDirection,
  query,
  setDoc,
  updateDoc,
} from 'firebase/firestore/lite';
import { firebaseApp } from '.';

export const firestore = getFirestore(firebaseApp);

export class BaseService<T> {
  private firestore: Firestore;
  private collectionName: string;

  constructor(firestore: Firestore, collectionName: string) {
    this.firestore = firestore;
    this.collectionName = collectionName;
  }

  getCollection = () => {
    return collection(this.firestore, this.collectionName);
  };

  getRef = (id: string) => {
    return doc(this.firestore, this.collectionName, id);
  };

  getById = async (id: string) => {
    return (await (await getDoc(this.getRef(id))).data()) as T;
  };

  getAll = async (): Promise<T[]> => {
    const collectionRef = this.getCollection();
    const collectionSnapshot = await getDocs(collectionRef);
    const docs = collectionSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.ref.id } as any));
    return docs;
  };

  queryAll = async (...ordersBy: [string, OrderByDirection][]): Promise<T[]> => {
    const collectionRef = this.getCollection();
    const q = await query(collectionRef, limit(20), ...ordersBy.map((o) => orderBy(...o)));
    const collectionSnapshot = await getDocs(q);
    const result: T[] = [];
    collectionSnapshot.forEach((doc) => {
      result.push({ ...doc.data(), id: doc.id } as any);
    });
    return result;
  };

  create = async (doc: T) => {
    const docRef = await addDoc(this.getCollection(), doc);
    return docRef.id;
  };

  update = async <PT extends T>(id: string, doc: PT) => {
    return await setDoc(this.getRef(id), doc);
  };

  patch = async <PT extends T>(id: string, doc: PT) => {
    const docRef = await updateDoc(this.getRef(id), doc);
    return docRef;
  };

  delete = async (id: string) => {
    const docRef = await deleteDoc(this.getRef(id));
    return docRef;
  };
}

export const eventService = new BaseService<Event>(firestore, 'events');
