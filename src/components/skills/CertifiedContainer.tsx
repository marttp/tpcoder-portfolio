import { For } from 'solid-js';

interface CertifiedContainerProps {
    label: string;
    certifiedList: Certified[];
}

interface Certified {
    name: string;
    category: string[];
    issuedDate: string;
    expiredDate: string;
    resources: CertifiedResource[];
}

interface CertifiedResource {
    type: string;
    url: string;
}

const CertifiedContainer = (props: CertifiedContainerProps) => (
    <div class="my-10">
        <h3 class="text-lg font-bold mb-2">{props.label}</h3>
        <div class="flex flex-wrap gap-2">
            <For each={props.certifiedList}>
                {(certified) => {
                    const isExpired = new Date(certified.expiredDate) < new Date();
                    return (<a
                        href={certified.resources[0]?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="bg-primary-light text-text py-2 px-4 rounded-full text-sm hover:bg-primary-dark hover:text-white transition-colors"
                    >
                        {certified.name}{isExpired ? ' [EXPIRED]' : ''}
                    </a>)
                }}
            </For>
        </div>
    </div>
);

export default CertifiedContainer;
