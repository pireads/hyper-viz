import { ILayer } from '../../components/layerstack/layer';
import { IUnitDisk } from '../../components/unitdisk/unitdisk';
import { Hypertree } from '../../components/hypertree/hypertree';
import { N } from '../n/n';
import { C } from '../transformation/hyperbolic-math';
import { Transformation } from '../transformation/hyperbolic-transformation';
import { TransformationCache } from '../transformation/hyperbolic-transformation';
import { ArcCurvature } from '../../components/layers/link-layer';
import { UnitDisk } from '../../components/unitdisk/unitdisk';
export interface UnitDiskView {
    parent: any;
    position: string;
    className: string;
    hypertree: Hypertree;
}
export interface UnitDiskArgs {
    data?: N;
    transform?: (n: N) => C;
    decorator: {
        new (view: UnitDiskView, args: UnitDiskArgs): IUnitDisk;
    };
    transformation: Transformation<N>;
    cacheUpdate: (ud: IUnitDisk, cache: TransformationCache) => void;
    layers: ((v: any, ls: IUnitDisk) => ILayer)[];
    layerOptions: {};
    clipRadius: number;
    nodeRadius: (ud: IUnitDisk, n: N) => number;
    nodeScale: (n: N) => number;
    nodeFilter: (n: N) => boolean;
    offsetEmoji: (ls: UnitDisk) => (d: any, i: any, v: any) => C;
    offsetLabels: (ls: UnitDisk) => (d: any, i: any, v: any) => C;
    captionBackground: 'all' | 'center' | 'none';
    captionFont: string;
    captionHeight: number;
    linkWidth: (n: N) => number;
    linkCurvature: ArcCurvature;
}
