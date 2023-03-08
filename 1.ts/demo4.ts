declare function create<T extends new () => any>(c: T): InstanceType<T>;
class YidengA {}
class YidengB {}

let a1 = create(YidengA);
let b1 = create(YidengB);
